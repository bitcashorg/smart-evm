import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/database'
import { TwitterDiscoveryService } from '@/services/twitter-discovery'
import {
  BaseAccount,
  SmartList,
  ListMember,
  AccountMetrics,
  SmartListWithDetails,
  EnhancedAccount
} from '@/app/actions/apps/twitter-reader/types'

export class IntegratedSmartListService {
  private supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  private discoveryService = new TwitterDiscoveryService()

  // Core List Management (from original implementation)
  async createList(name: string, description: string, categoryId: string) {
    const { data, error } = await this.supabase
      .from('smart_lists')
      .insert({
        name,
        description,
        category_id: categoryId
      })
      .select()
      .single()

    if (error) throw error
    return data
  }

  // Enhanced Discovery Process
  async discoverAccountsForList(listId: string, topic: string) {
    // 1. Discover potential accounts
    const potentialAccounts = await this.discoveryService.findAccounts(topic)
    
    // 2. Process and analyze accounts
    const analyzedAccounts = await this.processAccounts(potentialAccounts, topic)
    
    // 3. Add to review queue
    return this.addToReviewQueue(listId, analyzedAccounts)
  }

  private async processAccounts(accounts: any[], topic: string) {
    const processedAccounts = await Promise.all(
      accounts.map(async account => {
        // Calculate quality metrics
        const metrics = await this.discoveryService.analyzeAccount(account, topic)
        
        return {
          twitter_id: account.id,
          username: account.username,
          name: account.name,
          profile_image_url: account.profile_image_url,
          quality_score: metrics.qualityScore,
          topic_relevance: metrics.topicRelevance,
          status: 'pending'
        }
      })
    )

    return processedAccounts
  }

  // Review System (combining both implementations)
  async reviewAccount(
    listId: string,
    accountId: string,
    decision: 'approved' | 'rejected',
    reviewerId: string,
    notes?: string
  ) {
    // Start transaction
    const { data: list } = await this.supabase
      .from('smart_lists')
      .select('quality_threshold')
      .eq('id', listId)
      .single()

    const { data: account } = await this.supabase
      .from('accounts')
      .select('quality_score, topic_relevance')
      .eq('id', accountId)
      .single()

    // Ensure account meets quality threshold for approval
    if (decision === 'approved' && account?.quality_score < list.quality_threshold) {
      throw new Error('Account does not meet quality threshold')
    }

    // Update account status
    const { error: updateError } = await this.supabase
      .from('list_members')
      .update({
        status: decision,
        review_notes: notes,
        reviewed_by: reviewerId,
        reviewed_at: new Date().toISOString()
      })
      .eq('list_id', listId)
      .eq('account_id', accountId)

    if (updateError) throw updateError

    // Record review history
    const { error: historyError } = await this.supabase
      .from('review_history')
      .insert({
        list_id: listId,
        account_id: accountId,
        reviewer_id: reviewerId,
        previous_status: 'pending',
        new_status: decision,
        quality_score: account.quality_score,
        topic_relevance: account.topic_relevance,
        notes
      })

    if (historyError) throw historyError

    // Update list metrics
    await this.updateListMetrics(listId)
  }

  // Enhanced Querying (combining both implementations)
  async getListWithDetails(listId: string): Promise<SmartListWithDetails> {
    const { data, error } = await this.supabase
      .from('smart_lists')
      .select(`
        *,
        members:list_members(
          *,
          account:accounts(
            *,
            metrics:account_metrics(*)
          )
        )
      `)
      .eq('id', listId)
      .single()

    if (error) throw error

    // Calculate metrics
    const metrics = this.calculateListMetrics(data.members)

    return {
      ...data,
      metrics,
      members: data.members
    }
  }

  // Helper methods
  private async updateListMetrics(listId: string) {
    const { data: members } = await this.supabase
      .from('list_members')
      .select('status')
      .eq('list_id', listId)
      .eq('status', 'approved')

    const memberCount = members?.length || 0

    await this.supabase
      .from('smart_lists')
      .update({ member_count: memberCount })
      .eq('id', listId)
  }

  private calculateListMetrics(members: ListMember[]) {
    const approvedMembers = members.filter(m => m.status === 'approved')
    
    return {
      avgQualityScore: this.calculateAverage(approvedMembers, 'quality_score'),
      avgTopicRelevance: this.calculateAverage(approvedMembers, 'topic_relevance'),
      avgEngagement: this.calculateAverage(
        approvedMembers.map(m => (m as any).metrics).filter(Boolean),
        'engagement_rate'
      )
    }
  }

  private calculateAverage(array: any[], key: string): number {
    if (!array.length) return 0
    return array.reduce((sum, item) => sum + (item[key] || 0), 0) / array.length
  }
}