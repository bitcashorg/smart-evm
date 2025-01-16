'use client'

import { Transition } from '@/components/shared/transition'
import { useMobileNav } from '@/hooks/use-mobile-navigation'
import type { LangProp } from '@/types/routing.type'
import { AnimatePresence } from 'framer-motion'
import { MobileNavIcon } from './mobile-nav-icon'
import { NavLinks } from './nav-links'

export function MobileNav({ lang, dict }: MobileNavProps) {
  const { open, toggleOpen } = useMobileNav()

  return (
    <div>
      <MobileNavIcon isOpen={open} onClick={toggleOpen} />
      <AnimatePresence>
        {open && (
          <Transition duration={0.3}>
            <div className="mobile-nav gap-y-8 !overflow-auto py-6">
              <NavLinks mobile lang={lang} dict={dict} />
            </div>
          </Transition>
        )}
      </AnimatePresence>
    </div>
  )
}

export function MobileNavLoader() {
  return <MobileNavIcon />
}

interface MobileNavProps extends LangProp {
  dict: any
}
