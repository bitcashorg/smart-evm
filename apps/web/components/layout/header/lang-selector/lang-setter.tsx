'use client'

import { setLanguage } from '@/app/actions/set-lang'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'

export function LangSetter() {
  useEffect(() => {
    const cookies = parseCookies()
    const lang = cookies.lang

    if (!lang) {
      console.log('set lang for the first time', lang)
      setLanguage(lang || 'en')
    }
  }, [])

  return <div />
}
