// services/apps/twitter-reader/types.ts

export interface Tweet {
  id: string
  text: string
  author_id: string
  created_at: string
  conversation_id: string
  in_reply_to_user_id?: string
  public_metrics?: {
    like_count: number
    retweet_count: number
    reply_count: number
    quote_count: number
  }
}

export interface Thread {
  id: string
  tweets: Tweet[]
  created_at: string
  engagement_score: number
}

export interface SmartList {
  id: string
  name: string
  description: string
  member_count: number
  follower_count: number
  quality_threshold: number
}

export interface CategoryWithTopics {
  id: string
  name: string
  description: string
  topics: SmartList[]
}

export interface SmartListWithContent {
  list: SmartList
  threads: Thread[]
  lastUpdated: string
}

export type ReviewStatus = 'pending' | 'approved' | 'rejected'

export interface TopicStats {
  totalMembers: number
  pendingReviews: number
}

export interface TopicMember {
  id: string
  account: {
    twitter_id: string
    username: string
    name: string
    profile_image_url: string
  }
  status: ReviewStatus
  quality_score: number
  topic_relevance: number
  created_at: string
  metrics?: {
    engagement_rate: number
    topic_tweet_frequency: number
    trend: number
  }
}

export interface DiscoveryFilters {
  minFollowers?: number
  minEngagement?: number
  language?: string
}

export interface DiscoveredAccount {
  id: string
  username: string
  name: string
  description?: string
  metrics: {
    followers_count: number
    following_count: number
    tweet_count: number
    like_count: number
  }
  topicRelevance: number
}