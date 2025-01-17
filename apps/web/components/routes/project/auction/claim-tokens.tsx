'use client'

import { useSession } from '@/hooks/use-session'
import { Button } from '@repo/ui'
import { useAccount } from 'wagmi'

export function ClaimTokens() {
  const { session } = useSession()
  const { address } = useAccount()
  return (
    <div className="flex size-full flex-col items-center justify-center gap-6 p-4">
      <div className="flex flex-col space-y-4">
        <p className="text-center font-bold">Redeem your MBOTS Tokens</p>
      </div>
      <div className="flex flex-col space-y-2">
        <Button
          className="w-full bg-[#bd1e59] text-lg font-semibold text-white"
          disabled={!session || !address}
          size="lg"
        >
          Claim
        </Button>
      </div>
    </div>
  )
}
