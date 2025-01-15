import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { IconBitlauncher } from '../../ui/icons'
import { NavLinks } from './nav-links'

import { SessionButtonLoader } from '@/components/dialogs/session/session-button'
import { appConfig } from '@/lib/config'
import type { LangProp } from '@/types/routing.type'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { LangSelector } from './lang-selector'
import { MobileNavLoader } from './mobile-nav'
import { Navigation } from './new-nav'

export function Header({ lang, dict }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background md:pt-4 md:-top-4">
      <div className="container flex items-center justify-between h-16 mx-auto md:px-4">
        {/* Left Section with Icon */}
        <div className="flex items-center justify-start flex-1">
          <Link href={`/${lang}`}>
            <IconBitlauncher className="w-[9.625rem]" />
          </Link>
        </div>

        {/* Center Section (Navigation Links) */}
        <nav className="justify-center hidden space-x-4 sm:text-sm lg:text-base md:flex md:flex-1 lg:space-x-8">
          {/* // ? Development only */}
          {appConfig.features.newNavStruct ? (
            <Navigation lang={lang} />
          ) : (
            <NavLinks lang={lang} dict={dict} />
          )}
        </nav>

        {/* Right Section (Buttons/Language Selector) */}
        <div className="flex items-center justify-end flex-1 gap-2.5 lg:gap-5 sm:text-sm lg:text-base">
          <div className="items-center hidden gap-2.5 lg:gap-5 md:flex">
            <Suspense fallback={<Button>Login</Button>}>
              <DynamicSessionButton />
            </Suspense>
          </div>
          {appConfig.features.i18n ? <LangSelector lang={lang} /> : null}
          <div className="flex md:hidden">
            <DynamicMobileNav lang={lang} dict={dict} />
          </div>
        </div>
      </div>
    </header>
  )
}

const DynamicMobileNav = dynamic(() => import('./mobile-nav').then((c) => c.MobileNav), {
  loading: MobileNavLoader,
  ssr: false,
})

const DynamicSessionButton = dynamic(
  () =>
    import('@/components/dialogs/session/session-button').then((c) => c.SessionButton),
  {
    loading: SessionButtonLoader,
    ssr: false,
  },
)

interface HeaderProps extends LangProp {
  dict: any
}
