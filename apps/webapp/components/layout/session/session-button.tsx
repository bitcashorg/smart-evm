'use client'

import { Button } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { appConfig } from '@/lib/config'
import { cn } from '@/lib/utils'
import { User, Wallet } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { isMobile } from 'react-device-detect'

export function SessionButton() {
  const { session, loginRedirect, toggleShowSessionDialog, openConnectModal } = useSession()
  const router = useRouter()
  const isSession = session?.account

  const loginUser = () => isMobile
    ? loginRedirect
    : toggleShowSessionDialog

  // TODO: Implement logout
  const logoutUser = () => {
    return null
  }

  const redirectToWallet = () => {
    if (appConfig.features.enableWalletRedirect) {
      return router.push('/wallet')
    }
  }

  return (
    <div className="flex items-center gap-6">
      <Button
        variant="secondary"
        radius="full"
        className={cn('md:px-3 lg:px-6')}
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
      {isSession && (
        <Button
          variant="ghost"
          radius="full"
          className={cn('m-0 md:px-3 lg:px-6')}
          onClick={openConnectModal ? openConnectModal : redirectToWallet}
          suppressHydrationWarning={true}
        >
          <Wallet /> &nbsp; {openConnectModal && 'Connect'}
        </Button>
      )}
    </div>
  )
}
