// hooks/apps/twitter-reader/use-smart-list.ts

import { useState, useEffect, useCallback } from 'react'
import { useToast } from '@/components/ui/use-toast'
import type { SmartListWithContent } from './types'

interface UseSmartListOptions {
  limit?: number
  refreshInterval?: number
}

export function useSmartList(
  listId: string | undefined, 
  options: UseSmartListOptions = {}
) {
  const { limit = 20, refreshInterval } = options
  const { toast } = useToast()
  
  const [list, setList] = useState<SmartListWithContent | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchListContent = useCallback(async () => {
    if (!listId) return

    try {
      const queryParams = new URLSearchParams({
        limit: limit.toString()
      })

      const response = await fetch(
        `/api/apps/twitter-reader/smart-lists/${listId}?${queryParams}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch list content: ${response.statusText}`)
      }

      const { data } = await response.json()
      setList(data)

    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch list content'
      setError(message)
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive'
      })
    }
  }, [listId, limit, toast])

  // Initial fetch
  useEffect(() => {
    async function initialFetch() {
      setIsLoading(true)
      setError(null)
      await fetchListContent()
      setIsLoading(false)
    }

    initialFetch()
  }, [fetchListContent])

  // Set up polling if refreshInterval is provided
  useEffect(() => {
    if (!refreshInterval || !listId) return

    const intervalId = setInterval(() => {
      fetchListContent()
    }, refreshInterval)

    return () => clearInterval(intervalId)
  }, [refreshInterval, listId, fetchListContent])

  return {
    list,
    isLoading,
    error,
    refresh: fetchListContent
  }
}