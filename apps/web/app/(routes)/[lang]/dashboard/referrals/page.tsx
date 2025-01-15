import type { Metadata } from 'next'

import ReferralDashboard from '@/components/_wip/referral-dashboard'

export default function ReferralProgramPage() {
  return (
    <div className="container flex flex-col gap-16 px-7 md:pt-24">
      <ReferralDashboard />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Wallet | Bitlauncher',
  description: 'Be part of the intelligent future and join the Ai/Web3 revolution now!',
}
