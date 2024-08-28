'use client'

import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useSession } from '@/hooks/use-session'
import { cn } from '@/lib/utils'
import { useAccountModal } from '@rainbow-me/rainbowkit'
import { formatAddress } from '@repo/utils'
import { User, Wallet } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { isMobile } from 'react-device-detect'
import { useAccount } from 'wagmi'

export function SessionButton() {
  const {
    session,
    loginRedirect,
    toggleShowSessionDialog,
    openConnectModal,
    logout,
  } = useSession()
  const { openAccountModal } = useAccountModal()
  const account = useAccount()
  const router = useRouter()
  const hasSession = session?.account

  const loginUser = () =>
    isMobile ? loginRedirect() : toggleShowSessionDialog()

  return (
    <div className="flex justify-end gap-1.5 lg:gap-5">
      {hasSession && (
        <Button
          variant="ghost"
          radius="full"
          className={cn('px-3 m-0 lg:px-4')}
          onClick={openConnectModal ? openConnectModal : openAccountModal}
          suppressHydrationWarning={true}
        >
          <Wallet />
          &nbsp; {account?.address ? formatAddress(account.address) : 'Connect'}
        </Button>
      )}

      {!hasSession ? (
        <Button
          variant="secondary"
          radius="full"
          className={cn('flex min-w-[170px] self-end md:px-3 lg:px-4')}
          onClick={loginUser}
          suppressHydrationWarning={true}
        >
          Login
        </Button>
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="secondary"
              radius="full"
              className={cn('lg:min-w-[170px] md:px-3 lg:px-4')}
            >
              <User /> &nbsp; {session?.account}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="w-44 border-[#845BBF] bg-background text-center"
          >
            <ul className="flex flex-col gap-5 py-2">
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: not needed rn */}
              <li onClick={logout} className="cursor-pointer">
                Sign Out
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      )}
    </div>
  )
}

export const SessionButtonLoader = () => {
  return (
    <div className="flex justify-end gap-4">
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
