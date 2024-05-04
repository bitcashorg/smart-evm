import Link from 'next/link'
import * as React from 'react'
import { IconBitlauncher, IconDiscord } from '../ui/icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Suspense } from 'react'
import { NavLinks } from './nav-links'
import { SessionButton } from './session/session-button'
import { MobileNav } from './mobile-nav'

export function Header() {
  return (
    <div className="sticky top-0 z-50 flex h-16 bg-background">
      <div className="container px-4 flex items-center justify-between bg-background">
        <div className="flex h-full items-center grow">
          <Link shallow href="/">
            <IconBitlauncher className='!w-fit' />
          </Link>
          <div className="hidden md:flex md:gap-3 md:pl-4 lg:gap-10 lg:pl-16 justify-center grow">
            <NavLinks />
          </div>
        </div>

        {/* Desktop action buttons */}
        <div className="hidden items-center md:flex md:gap-3 lg:gap-5">
          <DiscordButton />
          <Suspense fallback={<Button>Login</Button>}>
            <SessionButton />
          </Suspense>
        </div>

        {/* mobile navbar icon */}
        <div className="flex md:hidden">
          <Suspense fallback={<div />}>
            <MobileNav />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function DiscordButton() {
  return (
    <Link
      href="https://discord.gg/KuR48XUxnG"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({
          variant: 'outline',
          radius: 'full'
        }),
        'border-transparent md:border-accent-secondary md:px-3 lg:px-10'
      )}
    >
      <IconDiscord className={'block size-7 fill-accent-secondary md:hidden'} />
      <span className="hidden md:block">Discord</span>
    </Link>
  )
}
