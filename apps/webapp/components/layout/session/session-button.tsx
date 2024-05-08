'use client'

import { Button } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { appConfig } from '@/lib/config'
import { cn } from '@/lib/utils'
import { useAccountModal } from '@rainbow-me/rainbowkit'
import { User, Wallet } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { isMobile } from 'react-device-detect'
import { formatAddress } from 'smartsale-lib'
import { useAccount } from 'wagmi'

export function SessionButton() {
  const { session, loginRedirect, toggleShowSessionDialog, openConnectModal } =
    useSession()
  const { openAccountModal } = useAccountModal()
  const account = useAccount()
  const router = useRouter()
  const isSession = session?.account

  const loginUser = () =>
    isMobile ? loginRedirect() : toggleShowSessionDialog()

  // TODO: Implement logout
  const logoutUser = () => {
    return null
  }

  const redirectToWallet = () => {
    if (appConfig.features.enableWalletAccess) {
      return router.push('/wallet')
    }
  }

  return (
    <div className="flex items-center gap-4">
      {isSession && (
        <Button
          variant="ghost"
          radius="full"
          className={cn('m-0 md:px-3 lg:px-2 lg:px-4')}
          onClick={openConnectModal ? openConnectModal : openAccountModal}
          suppressHydrationWarning={true}
        >
          <Wallet />
          &nbsp; {account?.address ? formatAddress(account.address) : 'Connect'}
        </Button>
      )}
      <Button
        variant="secondary"
        radius="full"
        className={cn('min-w-[170px] md:px-3 lg:px-4')}
        onClick={!isSession ? loginUser : logoutUser}
        suppressHydrationWarning={true}
      >
        {!isSession ? (
          'Login'
        ) : (
          <>
            <User /> &nbsp; {session?.account}
          </>
        )}
      </Button>
    </div>
  )
}

export const SessionButtonLoader = () => {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        radius="full"
        className={cn('m-0 md:px-3 lg:px-2 lg:px-4')}
        suppressHydrationWarning={true}
      >
        <Wallet />
        &nbsp; Connect
      </Button>

      <Button
        variant="secondary"
        radius="full"
        className={cn('min-w-[170px] md:px-3 lg:px-4')}
        suppressHydrationWarning={true}
      >
        Login
      </Button>
    </div>
  )
}
