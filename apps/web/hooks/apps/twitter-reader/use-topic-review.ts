// hooks/apps/twitter-reader/use-topic-review.ts

import { useState, useCallback } from 'react'
import { useToast } from '@/components/ui/use-toast'
import type { TopicMember, ReviewStatus } from './types'

export function useTopicReview(topicId: string | undefined) {
  const { toast } = useToast()
  const [members, setMembers] = useState<TopicMember[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchMembers = useCallback(async () => {
    if (!topicId) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/apps/twitter-reader/smart-lists/${topicId}/queue`)
      if (!response.ok) {
        throw new Error('Failed to fetch review queue')
      }

      const { data } = await response.json()
      setMembers(data)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch members'
      setError(message)
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }, [topicId, toast])

  const updateMemberStatus = useCallback(async (
    memberId: string,
    status: ReviewStatus,
    notes?: string
  ) => {
    if (!topicId) return

    try {
      const response = await fetch(`/api/apps/twitter-reader/smart-lists/${topicId}/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ memberId, status, notes })
      })

      if (!response.ok) {
        throw new Error('Failed to update member status')
      }

      // Update local state
      setMembers(prev => prev.filter(m => m.id !== memberId))

      toast({
        title: 'Success',
        description: `Member ${status} successfully`,
        variant: 'default'
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update status'
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive'
      })
    }
  }, [topicId, toast])

  useEffect(() => {
    if (topicId) {
      fetchMembers()
    }
  }, [topicId, fetchMembers])

  return {
    members,
    isLoading,
    error,
    refresh: fetchMembers,
    updateMemberStatus
  }
}