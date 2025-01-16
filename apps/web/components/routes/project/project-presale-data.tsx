'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useSupabaseClient } from '@/services/supabase'
import type { Tables } from '@repo/supabase'
import { Handshake, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { formatUnits } from 'viem'

export function ProjectPresaleData({
  presale,
  numberOfContributors,
}: {
  presale: Tables<'presale'>
  numberOfContributors: number
}) {
  const [contributors, setContributors] = useState<number>(numberOfContributors)
  const [totalRaised, setTotalRaised] = useState<bigint>(
    BigInt(presale.total_raised),
  )
  const supabase = useSupabaseClient()

  useEffect(() => {
    const subscription = supabase
      .channel(`presale_data_${presale.id}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'presale',
          filter: `id=eq.${presale.id}`,
        },
        (payload) => {
          if (
            payload.eventType === 'INSERT' ||
            payload.eventType === 'UPDATE'
          ) {
            setTotalRaised(BigInt(payload.new.total_raised))
            setContributors(payload.new.contributors)
          }
        },
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, presale.id])

  return (
    <div className="grid gap-4 pt-5 md:grid-cols-2 md:gap-8">
      <Card className="bg-muted" x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Raised</CardTitle>
          <Handshake className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${formatUnits(totalRaised, 6).split('.')[0]}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted" x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Contributors</CardTitle>
          <Users className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{contributors || '0'}</div>
        </CardContent>
      </Card>
    </div>
  )
}
