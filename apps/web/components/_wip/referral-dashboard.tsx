'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from '@/lib/utils'
import { useState } from 'react'
import ReferralProgramTab from "../routes/dashboard/referrals/referral-program-tab"

export default function ReferralDashboard() {
  const [activeTab, setActiveTab] = useState("referral")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="referral" className="w-full max-w-[1593px] mx-auto space-y-6 mt-8">
      <TabsList className="hidden mb-8 bg-transparent gap-x-3 justify-start md:flex">
        {/* <TabsTrigger value="leaderboard" className={cn(activeTab === 'leaderboard' ? "!text-accent-700 border-accent-700" : "text-white border-[#27272A]", "font-medium text-base rounded-full border bg-[#060A32] w-min px-4 py-2")} >Bitlauncher's leaderboard</TabsTrigger>
          <TabsTrigger value="wallet" className={cn(activeTab === 'wallet' ? "!text-accent-700 border-accent-700" : "text-white border-[#27272A]",  "font-medium text-base rounded-full border bg-[#060A32] w-min px-4 py-2")} >Wallet</TabsTrigger>
          <TabsTrigger value="history" className={cn(activeTab === 'history' ? "!text-accent-700 border-accent-700" : "text-white border-[#27272A]", "font-medium text-base rounded-full border bg-[#060A32] w-min px-4 py-2")} >Contribution History</TabsTrigger> */}
        <TabsTrigger
          value="referral"
          className={cn(
            activeTab === 'referral' ? "!text-accent-700 border-accent-700" : "text-white border-[#27272A]",
            "font-medium text-base rounded-full border bg-[#060A32] w-min px-4 py-2"
          )}>
          Referral Program
        </TabsTrigger>
      </TabsList>

      <TabsContent value="referral">
        <ReferralProgramTab />
      </TabsContent>

    </Tabs>
  )
}
