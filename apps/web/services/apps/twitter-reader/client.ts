// services/apps/twitter-reader/client.ts

import { TwitterApi } from 'twitter-api-v2'
import { createClient } from '@supabase/supabase-js'
import { Redis } from '@upstash/redis'
import type { 
  Tweet, 
  Thread, 
  SmartListWithContent, 
  DiscoveryFilters,
  ReviewStatus,
  CategoryWithTopics,
  TopicStats,
  TopicMember
} from './types'
import type { Database } from '@/types/database'

export class TwitterClient {
  private twitter: TwitterApi
  private supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  private redis = Redis.fromEnv()
  private CACHE_TTL = 1800 // 30 minutes

  constructor() {
    this.twitter = new TwitterApi(process.env.TWITTER_BEARER_TOKEN!)
  }

  // Category and Topic Management
  async getCategories(): Promise<CategoryWithTopics[]> {
    const { data, error } = await this.supabase
      .from('list_categories')
      .select(`
        id,
        name,
        description,
        topics:smart_lists(
          id,
          name,
          description,
          member_count,
          quality_threshold
        )
      `)

    if (error) throw error
    return data
  }

  async getTopicQueue(topicId: string) {
    const { data, error } = await this.supabase
      .from('list_members')
      .select(`
        *,
        account:accounts(*)
      `)
      .eq('list_id', topicId)
      .eq('status', 'pending')
      .order('quality_score', { ascending: false })

    if (error) throw error
    return data
  }

  async getTopicMembers(topicId: string) {
    const { data, error } = await this.supabase
      .from('list_members')
      .select(`
        *,
        account:accounts(*),
        metrics:account_metrics(*)
      `)
      .eq('list_id', topicId)
      .eq('status', 'approved')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }

  async getTopicStats(topicId: string): Promise<TopicStats> {
    const { data, error } = await this.supabase
      .from('smart_lists')
      .select(`
        member_count,
        list_members(count),
        list_members(
          count,
          status
        )
      `)
      .eq('id', topicId)
      .single()

    if (error) throw error

    const pendingCount = data.list_members.find(
      count => count.status === 'pending'
    )?.count || 0

    return {
      totalMembers: data.member_count,
      pendingReviews: pendingCount
    }
  }

  // Review Process
  async updateMemberStatus(
    memberId: string, 
    status: ReviewStatus, 
    reviewerId: string,
    notes?: string
  ) {
    const { error } = await this.supabase
      .from('list_members')
      .update({
        status,
        reviewed_by: reviewerId,
        reviewed_at: new Date().toISOString(),
        review_notes: notes
      })
      .eq('id', memberId)

    if (error) throw error

    // Clear cache for this list
    const member = await this.supabase
      .from('list_members')
      .select('list_id')
      .eq('id', memberId)
      .single()

    if (member.data) {
      await this.redis.del(`list:${member.data.list_id}`)
    }
  }

  // Content Management
  async getSmartListContent(
    listId: string,
    userId: string,
    options: { limit?: number } = {}
  ): Promise<SmartListWithContent> {
    // Check rate limit
    const rateLimitKey = `rate_limit:${userId}`
    const requests = await this.redis.incr(rateLimitKey)
    if (requests === 1) {
      await this.redis.expire(rateLimitKey, 3600) // 1 hour window
    }
    if (requests > 100) {
      throw new Error('Rate limit exceeded')
    }

    // Try cache first
    const cacheKey = `list:${listId}`
    const cached = await this.redis.get(cacheKey)
    if (cached) {
      return JSON.parse(cached)
    }

    try {
      const { data: list } = await this.supabase
        .from('smart_lists')
        .select(`
          *,
          members:list_members(
            account:accounts(*)
          )
        `)
        .eq('id', listId)
        .single()

      if (!list) throw new Error('List not found')

      const approvedAccounts = list.members
        .filter(m => m.status === 'approved')
        .map(m => m.account.twitter_id)

      const tweets = await this.getRecentTweetsFromUsers(
        approvedAccounts,
        options.limit || 100
      )

      const threads = this.organizeThreads(tweets)
      
      const result = {
        list,
        threads,
        lastUpdated: new Date().toISOString()
      }

      // Cache the result
      await this.redis.setex(cacheKey, this.CACHE_TTL, JSON.stringify(result))

      return result
    } catch (error) {
      console.error('Error fetching smart list content:', error)
      throw error
    }
  }

  async discoverAccounts(topicId: string, filters: DiscoveryFilters) {
    const { 
      minFollowers = 1000,
      minEngagement = 1,
      language = 'en'
    } = filters

    try {
      // Get topic info
      const { data: topic } = await this.supabase
        .from('smart_lists')
        .select('name, description')
        .eq('id', topicId)
        .single()

      if (!topic) throw new Error('Topic not found')

      // Use topic name and description for search
      const searchTerm = `${topic.name} ${topic.description} lang:${language}`
      
      const results = await this.twitter.v2.search(searchTerm, {
        'tweet.fields': ['public_metrics', 'created_at'],
        'user.fields': ['public_metrics', 'description'],
        max_results: 100
      })

      // Process and filter accounts
      const accounts = results.data
        .map(tweet => tweet.author_id)
        .filter((id, index, self) => self.indexOf(id) === index)

      const accountDetails = await this.twitter.v2.users(accounts, {
        'user.fields': ['public_metrics', 'description']
      })

      return accountDetails.data
        .filter(account => {
          const metrics = account.public_metrics
          const followers = metrics?.followers_count || 0
          const tweets = metrics?.tweet_count || 0
          const engagement = (metrics?.like_count || 0) / tweets

          return followers >= minFollowers && engagement >= minEngagement
        })
        .map(account => ({
          id: account.id,
          username: account.username,
          name: account.name,
          description: account.description,
          metrics: account.public_metrics,
          topicRelevance: this.calculateBasicRelevance(account.description || '', topic.name)
        }))
        .sort((a, b) => b.topicRelevance - a.topicRelevance)
    } catch (error) {
      console.error('Error discovering accounts:', error)
      throw error
    }
  }

  private async getRecentTweetsFromUsers(
    userIds: string[],
    limit: number
  ): Promise<Tweet[]> {
    try {
      const tweets = await this.twitter.v2.tweets({
        ids: userIds,
        max_results: limit,
        'tweet.fields': [
          'author_id',
          'conversation_id',
          'created_at',
          'in_reply_to_user_id',
          'public_metrics'
        ],
        'user.fields': ['name', 'username', 'profile_image_url'],
        expansions: ['author_id', 'in_reply_to_user_id']
      })

      return tweets.data.map(tweet => ({
        id: tweet.id,
        text: tweet.text,
        author_id: tweet.author_id,
        created_at: tweet.created_at,
        conversation_id: tweet.conversation_id,
        in_reply_to_user_id: tweet.in_reply_to_user_id,
        public_metrics: tweet.public_metrics
      }))
    } catch (error) {
      console.error('Error fetching tweets:', error)
      throw error
    }
  }

  private organizeThreads(tweets: Tweet[]): Thread[] {
    const conversations = tweets.reduce((acc, tweet) => {
      const id = tweet.conversation_id
      if (!acc[id]) {
        acc[id] = []
      }
      acc[id].push(tweet)
      return acc
    }, {} as Record<string, Tweet[]>)

    return Object.values(conversations)
      .map(tweetGroup => {
        const rootTweet = tweetGroup[0]
        if (!rootTweet) return null

        const engagement = tweetGroup.reduce((sum, t) => 
          sum + (t.public_metrics?.like_count || 0) + 
                (t.public_metrics?.retweet_count || 0),
          0
        )

        return {
          id: rootTweet.conversation_id,
          tweets: tweetGroup.sort((a, b) => 
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          ),
          created_at: rootTweet.created_at,
          engagement_score: engagement
        }
      })
      .filter((thread): thread is Thread => thread !== null)
      .sort((a, b) => b.engagement_score - a.engagement_score)
  }

  private calculateBasicRelevance(text: string, topic: string): number {
    const keywords = topic.toLowerCase().split(' ')
    const content = text.toLowerCase()
    
    return keywords.reduce((score, keyword) => {
      return score + (content.includes(keyword) ? 1 : 0)
    }, 0) / keywords.length * 100
  }

  async checkListAccess(listId: string, userId: string): Promise<boolean> {
    const { data } = await this.supabase
      .from('list_followers')
      .select()
      .eq('list_id', listId)
      .eq('user_id', userId)
      .single()

    return !!data
  }
}