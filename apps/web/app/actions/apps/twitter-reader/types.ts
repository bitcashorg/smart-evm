// types/smart-lists.ts

// Base types from original implementation
export interface BaseAccount {
  id: string
  twitter_id: string
  username: string
  name?: string
  profile_image_url?: string
  status: 'pending' | 'approved' | 'rejected'
  quality_score: number
  topic_relevance: number
  reviewed_at?: string
  reviewer_id?: string
  created_at: string
  updated_at: string
}

// Enhanced types integrating both implementations
export interface SmartList {
  id: string
  category_id: string
  name: string
  description?: string
  is_public: boolean
  member_count: number
  follower_count: number
  quality_threshold: number
  created_at: string
  updated_at: string
}

export interface ListMember {
  id: string
  list_id: string
  account_id: string
  status: 'pending' | 'approved' | 'rejected'
  quality_score: number
  topic_relevance: number
  review_notes?: string
  reviewed_by?: string
  reviewed_at?: string
  created_at: string
}

export interface AccountMetrics {
  id: string
  account_id: string
  engagement_rate: number
  topic_tweet_frequency: number
  average_likes: number
  average_retweets: number
  recorded_at: string
}

// Combined interfaces for UI
export interface EnhancedAccount extends BaseAccount {
  metrics?: AccountMetrics
  lists?: SmartList[]
}

export interface SmartListWithDetails extends SmartList {
  members: ListMemberWithAccount[]
  metrics: {
    avgQualityScore: number
    avgTopicRelevance: number
    avgEngagement: number
  }
}

export interface ListMemberWithAccount extends ListMember {
  account: EnhancedAccount
}