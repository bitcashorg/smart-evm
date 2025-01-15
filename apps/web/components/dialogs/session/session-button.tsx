'use client'

import { ActiveLink } from '@/components/shared/active-link'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useSession } from '@/hooks/use-session'
import { appConfig } from '@/lib/config'
import { cn } from '@/lib/utils'
import { useAccountModal } from '@rainbow-me/rainbowkit'

import { formatAddress } from '@repo/utils'
import { LogOut, User, Wallet } from 'lucide-react'
import { useParams } from 'next/navigation'
import { isMobile } from 'react-device-detect'
import { useAccount } from 'wagmi'

export function SessionButton() {
  const { session, loginRedirect, toggleShowSessionDialog, openConnectModal, logout } =
    useSession()
  const { openAccountModal } = useAccountModal()
  const account = useAccount()
  const hasSession = session?.account

  const { lang } = useParams();

  const loginUser = () => (isMobile ? loginRedirect() : toggleShowSessionDialog())
  
  return (
    <div className="flex justify-end gap-1.5 lg:gap-5">
      {!hasSession ? (
        <Button
          variant="secondary"
          radius="full"
          className={cn('flex min-w-[170px] self-end md:px-3 lg:px-4')}
          onClick={loginUser}
          suppressHydrationWarning={true}
        >
          Login / Register
        </Button>
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="secondary"
              radius="full"
              className={cn('lg:min-w-52 md:px-3 lg:px-4')}
            >
              <User /> &nbsp; {session?.account}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="w-52 mt-5 bg-accent-600 border-none font-semibold text-center relative after:content-[''] after:absolute after:-top-3 after:mx-auto after:-translate-x-2 after:w-6 after:h-6 after:rotate-45 after:bg-accent-600"
          >
            <ul className="flex flex-col gap-5 py-2 justify-center items-center text-center">
              <li
                onClick={openConnectModal ? openConnectModal : openAccountModal}
                className="hover:text-accent-400 active:text-accent-400 w-full cursor-pointer text-center flex justify-center gap-x-1"
              >
                <Wallet />
                &nbsp;{' '}

                <span>{account?.address ? formatAddress(account.address) : 'Connect'}</span>
              </li>

              {appConfig.features.wallet ? (
                <ActiveLink href={`/${lang}/wallet`}>
                  <li className="w-full">
                    My Wallet
                  </li>
                </ActiveLink>
              ) : null}


              {appConfig.features.presale ? (
                <ActiveLink href={`/${lang}/bitcash-bitlauncher/presale`}>
                  <li className="w-full">
                    Presale
                  </li>
                </ActiveLink>
              ) : null}

              <ActiveLink href={`/${lang}/dashboard/referrals`} className="pb-5 border-b w-full border-b-textInfoForeground/50">
                <li className="w-full">
                  Referrals
                </li>
              </ActiveLink>

              <li onClick={logout} className="hover:text-accent-400 active:text-accent-400 cursor-pointer flex justify-center items-center gap-x-3">
                <span>Sign Out</span>
                <LogOut />
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
