'use client'

import { useErc20Balance, useNativeBalance } from '@/hooks/use-balance'
import { useEosBalances } from '@/hooks/use-eos-balances'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@repo/ui'

import { TestnetBLPL, TestnetUSDCred } from '@repo/auction'
import { useAccount } from 'wagmi'

export function BalancesTable() {
  const { address } = useAccount()
  const eosBalances = useEosBalances()

  const usdCredBalance = useErc20Balance({
    contract: TestnetUSDCred.address,
    abi: TestnetUSDCred.abi,
    address: address || '0x',
    chainId: TestnetUSDCred.chainId,
  })

  const blplBalance = useErc20Balance({
    contract: TestnetBLPL.address,
    abi: TestnetBLPL.abi,
    address: address || '0x',
    chainId: TestnetBLPL.chainId,
  })

  const eosEvmBalance = useNativeBalance(address)

  const coins = [
    {
      coin: 'BLPL',
      totalAmount: `${blplBalance.formatted || 0}`,
      nertwork: 'EOS EVM',
      description: 'Bitlauncher Prelaunch Token',
    },
    {
      coin: 'BITUSD',
      totalAmount: eosBalances.bitusd || 0,
      nertwork: 'EOS Mainnet',
      description: 'Bitcash USD stable coin',
    },
    {
      coin: 'USDCred',
      totalAmount: `${usdCredBalance.formatted || 0}`,
      nertwork: 'EOS EVM',
      description: 'Bitlaucher Bidding Token',
    },

    // {
    //   coin: 'MBOTS',
    //   totalAmount: eosBalances.mbots,
    //   nertwork: 'EOS Mainnet',
    //   description: 'MBOTS Token'
    // },
    {
      coin: 'EOS (gas)',
      totalAmount: eosBalances.eos,
      nertwork: 'EOS Mainnet',
      description: 'Native EOS token',
    },
    {
      coin: 'EOS (gas)',
      totalAmount: `${eosEvmBalance.formatted || 0}`,
      nertwork: 'EOS EVM',
      description: 'Wrapped EOS on EOS EVM',
    },
    {
      coin: 'BL',
      totalAmount: `${eosEvmBalance.formatted || 0}`,
      nertwork: 'Bitcash Chain',
      description: 'BL token on Bitcash Mainnet',
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Ticker</TableHead>
          <TableHead>Network</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coins.map((coin) => (
          <TableRow key={coin.coin + coin.nertwork}>
            <TableCell className="font-medium">{coin.coin}</TableCell>
            <TableCell>{coin.nertwork}</TableCell>
            <TableCell>{coin.description}</TableCell>
            <TableCell className="text-right">{coin.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}
