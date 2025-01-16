import { DepositCard } from '@/components/routes/wallet/deposit-card'
import { WithdrawCard } from '@/components/routes/wallet/withdraw-card'
import type { Metadata } from 'next'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { PresaleTransactionsCard } from '@/components/routes/project/presale/presale-transactions-card'
import { BalancesTable } from '@/components/routes/wallet/balances-table'
import { appConfig } from '@/lib/config'
import { redirect } from 'next/navigation'

export default function WalletPage() {
  if (!appConfig.features.wallet) redirect('/')
  return (
    <div className="container flex flex-col gap-16 px-7 md:pt-24">
      <div className="flex flex-col gap-10 space-between md:flex-row">
        <div className="md:w-2/3">
          <BalancesCard />
        </div>
        <div className="flex flex-col w-full gap-5 md:w-1/3">
          <DepositCard />
          <WithdrawCard />
        </div>
      </div>

      {/* <PresaleTransactionsCard presaleData={presaleData} /> */}

      {/* <main className="grid items-start flex-1 gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid items-start gap-4 auto-rows-max md:gap-8 lg:col-span-2">
          <WalletTabs />
        </div>

        <OrderCard />
      </main> */}
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Wallet | Bitlauncher',
  description:
    'Be part of the intelligent future and join the Ai/Web3 revolution now!',
}

function BalancesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet Balances</CardTitle>
        <CardDescription>
          Your balances on the Bitcash | Bitlauncher ecosystem. Connect your
          Bitcash and EVM wallets.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BalancesTable />
      </CardContent>
    </Card>
  )
}
