'use client'

import { ActiveLink } from '@/components/shared/active-link'
import { useMobileNav } from '@/hooks/use-mobile-navigation'
import { useSession } from '@/hooks/use-session'
import { appConfig } from '@/lib/config'
import { cn } from '@/lib/utils'
import type { LangProp } from '@/types/routing.type'
import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit'
import { formatAddress } from '@repo/utils'
import { LogOut, Wallet } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import { useAccount } from 'wagmi'

export function NavLinks({
  mobile = false,
  lang,
  dict,
}: { mobile?: boolean } & NavLinksProps) {
  const { loginRedirect, session, logout } = useSession()
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { address } = useAccount()
  const router = useRouter()
  const { close } = useMobileNav()
  const bitcashAccount = session?.account

  const links = [
    {
      id: 'login',
      href: null,
      text: bitcashAccount ? bitcashAccount : dict.nav.login,
      mobile: true,
      action: bitcashAccount ? null : loginRedirect,
      disabled: false,
      icon: {
        element: "",
        left: false,
        right: false
      }
    },
    {
      id: 'connect',
      href: null,
      text: address ? formatAddress(address) : dict.nav.connect,
      mobile: true,
      action: () => (bitcashAccount ? openConnectModal?.() : openAccountModal?.()),
      disabled: !bitcashAccount,
      icon: {
        element: address ? <Wallet /> : "",
        left: address ? true : false,
        right: false
      }
    },
    {
      id: 'wallet',
      href: '/wallet',
      text: "My Wallet",
      mobile: true,
      action: null,
      disabled: !appConfig.features.wallet || !bitcashAccount,
      icon: {
        element: "",
        left: false,
        right: false
      }
    },
    {
      id: 'presale',
      href: '/bitcash-bitlauncher/presale',
      text: 'Presale',
      mobile: true,
      action: null,
      disabled: !appConfig.features.presale || !bitcashAccount,
      icon: {
        element: "",
        left: false,
        right: false
      }
    },
    {
      id: 'referrals',
      href: '/dashboard/referrals',
      text: 'Referrals',
      mobile: true,
      action: null,
      disabled: !bitcashAccount,
      icon: {
        element: "",
        left: false,
        right: false
      }
    },
    {
      id: 'logout',
      href: null,
      action: logout,
      text: 'Sign out',
      mobile: true,
      disabled: !bitcashAccount,
      icon: {
        element: <LogOut />,
        left: false,
        right: true
      }
    },

    {
      id: 'about',
      href: '/about/about-bitlauncher',
      text: dict.nav.about,
      mobile: false,
      action: null,
      disabled: false,
      icon: {
        element: "",
        left: false,
        right: false
      }
    },
    {
      id: 'whitepaper',
      href: '/whitepaper',
      text: 'Whitepaper',
      mobile: false,
      action: null,
      disabled: false,
      icon: {
        element: "",
        left: false,
        right: false
      }
    },
    {
      id: 'security',
      href: '/learn/security',
      text: dict.nav.security,
      mobile: false,
      action: null,
      disabled: false,
      icon: {
        element: "",
        left: false,
        right: false
      }
    },
    {
      id: 'blog',
      href: '/blog',
      text: 'Blog',
      mobile: false,
      action: null,
      disabled: false,
      icon: {
        element: "",
        left: false,
        right: false
      }
    },
    {
      id: 'apps',
      href: '/apps/',
      text: 'Apps',
      mobile: false,
      action: null,
      disabled: false,
      icon: {
        element: "",
        left: false,
        right: false
      }
    },

  ] as const

  return links.map((link) => {
    if ((link.mobile && !mobile) || link.disabled) return null

    return (
      <ActiveLink
        key={`${mobile ? 'mobile' : 'desktop'}-link-${link.href}-${uuidv4()}`}
        shallow={true}
        className={
          cn(
            "flex justify-center items-center gap-x-3 font-semibold w-11/12",
            link.id === "logout" && "pb-8 border-b border-b-textInfoForeground",
          )
        }
        href={link.href ? `/${lang}${link.href}` : '#'}
        onClick={(e) => {
          e.preventDefault()
          if (link.action) {
            link.action()
          }
          if (link.href) {
            router.push(`/${lang}${link.href}`)
          }
          close() // Close the menu using context
        }}
        aria-disabled={link.disabled}
      >
        {
          link?.icon?.left && (
            link?.icon?.element
          )
        }
        {link.text}
        {
          link?.icon?.right && (
            link?.icon?.element
          )
        }
      </ActiveLink>
    )
  })
}

interface NavLinksProps extends LangProp {
  mobile?: boolean
  dict: any
}
