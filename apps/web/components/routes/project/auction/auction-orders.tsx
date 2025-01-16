'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useSupabaseClient } from '@/services/supabase'
import { TestnetEasyAuction } from '@repo/auction'
import { formatAddress } from '@repo/utils'
import BN from 'bn.js'
import { format } from 'date-fns'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useAccount, useReadContract } from 'wagmi'

export function AuctionOrders() {
  const supabase = useSupabaseClient()
  const { address } = useAccount()
  const [orders, setOrders] = useState<any[]>([])
  const userId = useReadContract({
    ...TestnetEasyAuction,
    functionName: 'getUserId',
    args: [address],
    query: {
      enabled: !!address,
    },
  })

  useEffect(() => {
    if (!userId.data) return
    const fetchOrders = async (userId: number) => {
      // console.log('fetch orders...')
      const { data, error } = await supabase
        .from('auction_order')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) return
      setOrders(data)
    }
    fetchOrders(new BN(userId.data?.toString()).toNumber())
    // console.log(
    //   `subscribing to supabase channel filtering by userId=${userId.data}`
    // )
    const channel = supabase
      .channel('orders')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'orders' },
        (payload) => {
          // Check if the inserted order's user_id matches the desired userId
          const isSameUserId =
            BigInt(payload.new.user_id) === BigInt(String(userId.data) || 0)
          // console.log(
          //   'supabase payload.new',
          //   payload.new,
          //   userId.data,
          //   isSameUserId
          // )
          if (!isSameUserId) return
          setOrders((orders) => {
            // console.log('setOrders', payload.new, orders[0])
            return [payload.new, ...orders]
          })
        },
      )
      .subscribe()
    // console.log('subscribed to supabase...')

    return () => {
      supabase.removeChannel(channel)
    }
  }, [userId.data, setOrders, supabase])

  // console.log(stringify(orders))

  return (
    <>
      <h2 className="heading3 px-2 py-5">Orders</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Max Price</TableHead>
            <TableHead>Min Buy Amount</TableHead>
            <TableHead>Bid Amount</TableHead>
            <TableHead>Transaction</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell>
                {(
                  Number(formatTokenAmount(order.sell_amount)) /
                  order.buy_amount
                ).toFixed(2)}
              </TableCell>
              <TableCell>{order.buy_amount}</TableCell>
              <TableCell>
                {formatTokenAmount(order.sell_amount.toString())}
              </TableCell>

              <TableCell>
                <Link
                  href={`https://explorer.testnet.evm.eosnetwork.com/tx/${formatAddress(order.transactionHash)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formatAddress(order.transactionHash)}
                </Link>
              </TableCell>
              <TableCell>
                {format(new Date(order.created_at), "MMMM d, yyyy 'at' h:mm a")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

// Function to format token amounts
const formatTokenAmount = (amount = '', decimals = 6) => {
  return (Number(amount) / 10 ** decimals).toFixed(2) // Adjust precision as needed
}
