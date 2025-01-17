'use client'
import { useSupabaseClient } from '@/services/supabase'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@repo/ui'
import { formatAddress } from '@repo/utils'
import { format } from 'date-fns'
import Link from 'next/link'
import { useState } from 'react'
import { useAccount } from 'wagmi'

export function TransactionsTable() {
  const supabase = useSupabaseClient()
  const { address } = useAccount()
  const [transactions, setTransactions] = useState<any[]>([])

  // useEffect(() => {
  //   if (!address) return
  //   const fetchOrders = async (address: Address) => {
  //     const { data, error } = await supabase
  //       .from('transfer')
  //       .select('*')
  //       .eq('from', address)
  //       .order('created_at', { ascending: false })

  //     if (error) return
  //     setTransactions(data)
  //   }
  //   fetchOrders(address)
  //   const channel1 = supabase
  //     .channel('transfers')
  //     .on(
  //       'postgres_changes',
  //       { event: 'INSERT', schema: 'public', table: 'transfers' },
  //       (payload) => {
  //         const isSameAddress = payload.new.from === address
  //         if (!isSameAddress) return
  //         setTransactions((transactions) => {
  //           return [payload.new, ...transactions]
  //         })
  //       },
  //     )
  //     .subscribe()

  //   const channel2 = supabase
  //     .channel('transfers')
  //     .on(
  //       'postgres_changes',
  //       { event: 'UPDATE', schema: 'public', table: 'transfers' },
  //       (payload) => {
  //         const isSameAddress = payload.new.from === address
  //         if (!isSameAddress) return
  //         setTransactions((transactions) => {
  //           return [payload.new, ...transactions]
  //         })
  //       },
  //     )
  //     .subscribe()

  //   return () => {
  //     supabase.removeChannel(channel1)
  //     supabase.removeChannel(channel2)
  //   }
  // }, [setTransactions, address, supabase])

  return (
    <div>
      <h2 className="heading3 px-2 py-5">Transactions</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Deposit Trx</TableHead>
            <TableHead>Issuance Trx</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((trx, index) => (
            <TableRow key={index}>
              <TableCell>{trx.type}</TableCell>

              <TableCell>{formatTokenAmount(trx.amount.toString())}</TableCell>

              <TableCell>
                <Link
                  href={`https://sepolia.etherscan.io/tx/${formatAddress(trx.trx_hash)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formatAddress(trx.trx_hash)}
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  href={`https://explorer.testnet.evm.eosnetwork.com/tx/${formatAddress(trx.usdcred_trx)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formatAddress(trx.usdcred_trx)}
                </Link>
              </TableCell>
              <TableCell>
                {format(new Date(trx.created_at), "MMMM d, yyyy 'at' h:mm a")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// Function to format token amounts
const formatTokenAmount = (amount = '', decimals = 6) => {
  return (Number(amount) / 10 ** decimals).toFixed(2) // Adjust precision as needed
}
