'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { appConfig } from '@/lib/config'
import { useSupabaseClient } from '@/services/supabase'
import {
  type PresaleContribution,
  getPresaleContributions,
} from '@/services/supabase/service'
import { allChains, eosEvmMainnet, eosEvmTestnet } from '@repo/chains'
import { formatAddress } from '@repo/utils'
import { useEffect, useState } from 'react'

const explorerUrl =
  appConfig.env === 'prod'
    ? eosEvmMainnet.blockExplorers?.default.url
    : eosEvmTestnet.blockExplorers?.default.url

export function PresaleTransactionsCard(params: {
  contributions: PresaleContribution[]
  presaleId: number
}) {
  const supabase = useSupabaseClient()
  const [contributions, setContributions] = useState<PresaleContribution[]>(
    params.contributions,
  )

  useEffect(() => {
    console.log('🔥 subscribing to supabase deposit changes')
    const subscription = supabase
      .channel('presale_deposit_updates')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'presale_deposit',
        },
        async (payload) => {
          console.log('🚀 subscription payload', payload)
          const presaleContributions = await getPresaleContributions({
            presaleId: params.presaleId,
            supabase,
          })
          setContributions(presaleContributions.contributions)

          // if (payload.eventType === 'INSERT') {
          //   console.log('😤 insert', payload)
          //   setContributions((prev) => [payload.new as PresaleContribution, ...prev])
          // } else if (payload.eventType === 'UPDATE') {
          //   console.log('update', payload)
          //   setContributions((prev) =>
          //     prev.map((t) =>
          //       t.deposit_hash === payload.new.deposit_hash
          //         ? (payload.new as PresaleContribution)
          //         : t,
          //     ),
          //   )
          // }
        },
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, params.presaleId])

  return (
    <Card x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Presale Contributions</CardTitle>
          <CardDescription>Recent presale transactions.</CardDescription>
        </div>
        {/* <Button asChild size="sm" className="gap-1 ml-auto"></Button> */}
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Address</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Deposit</TableHead>
              <TableHead>Issuance</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Network</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contributions.length > 0 ? (
              contributions.map((contribution) => (
                <TransactionRow
                  key={contribution.transaction.hash}
                  contribution={contribution}
                />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  No transactions found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function TransactionRow({ contribution }: { contribution: PresaleContribution }) {
  const chain = allChains.find(
    (chain) => chain.id.toString() === contribution.transaction.chain_id.toString(),
  )
  const isEvm = chain?.chainType === 'evm'
  return (
    <TableRow>
      <TableCell>
        <div className="font-medium">
          {isEvm ? formatAddress(contribution.address) : contribution.account}
        </div>
      </TableCell>

      <TableCell>
        {contribution.amount !== null
          ? (contribution.amount / 1000000).toFixed(6).split('.')[0]
          : 'N/A'}
      </TableCell>

      <TableCell> {contribution.transaction.final ? 'Finalized' : 'Pending'}</TableCell>

      <TableCell>
        {chain?.blockExplorers?.default ? (
          <a
            href={`${chain.blockExplorers.default.url}/tx/${contribution.transaction.hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {formatAddress(contribution.transaction.hash)}
          </a>
        ) : (
          formatAddress(contribution.transaction.hash)
        )}
      </TableCell>

      <TableCell>
        {explorerUrl && contribution.issuance_hash ? (
          <a
            href={`${explorerUrl}/tx/${contribution.issuance_hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {formatAddress(contribution.issuance_hash)}
          </a>
        ) : contribution.issuance_hash ? (
          formatAddress(contribution.issuance_hash)
        ) : (
          'Pending'
        )}
      </TableCell>
      <TableCell>
        {contribution.transaction.created_at
          ? new Date(contribution.transaction.created_at).toLocaleDateString()
          : 'N/A'}
      </TableCell>
      <TableCell>{chain?.name ?? 'Unknown Chain'}</TableCell>
    </TableRow>
  )
}
