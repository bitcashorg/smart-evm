// hooks/apps/twitter-reader/use-list-discovery.ts

import { useState, useCallback } from 'react'
import { useToast } from '@/components/ui/use-toast'
import type { DiscoveredAccount } from './types'

interface DiscoveryFilters {
  minFollowers?: number
  minEngagement?: number
  language?: string
}

export function useListDiscovery(topicId: string | undefined) {
  const { toast } = useToast()
  const [accounts, setAccounts] = useState<DiscoveredAccount[]>([])
  const [isDiscovering, setIsDiscovering] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const discoverAccounts = useCallback(async (filters?: DiscoveryFilters) => {
    if (!topicId) return

    setIsDiscovering(true)
    setError(null)

    try {
      const response = await fetch(`/api/apps/twitter-reader/smart-lists/${topicId}/discover`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ filters })
      })

      if (!response.ok) {
        throw new Error(`Discovery failed: ${response.statusText}`)
      }

      const { data } = await response.json()
      setAccounts(data)
      setIsDiscovering(false)

    } catch (err) {
      const message = err instanceof Error ? err.message : 'Discovery failed'
      setError(message)
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive'
      })
      setIsDiscovering(false)
    }
  }, [topicId, toast])

  return {
    accounts,
    isDiscovering,
    error,
    discoverAccounts,
    clearAccounts: () => setAccounts([])
  }
}