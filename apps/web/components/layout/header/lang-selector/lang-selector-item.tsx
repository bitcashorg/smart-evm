'use client'

import { setLanguage } from '@/app/actions/set-lang'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import type { Lang } from '@/dictionaries/locales'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { LangSelectorOption } from './lang-selector-options'

export function LangSelectorItem({ option, lang }: LangSelectorProps) {
  const pathname = usePathname()
  // const handleSetLanguage = async (lang: string) => {
  //   'use server'
  //   await
  // }

  return (
    <Link
      onClick={() => setLanguage(option.code)}
      href={pathname.replace(new RegExp(`/${lang}(?=/|$)`), `/${option.code}`)}
    >
      <DropdownMenuItem>{option.name}</DropdownMenuItem>
    </Link>
  )
}

export interface LangSelectorProps {
  option: LangSelectorOption
  lang: Lang
}
