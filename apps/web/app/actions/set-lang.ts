// app/actions/set-lang.ts
'use server'

import { cookies } from 'next/headers'

export async function setLanguage(lang: string) {
  const cookieStore = cookies()
  cookieStore.set('lang', lang, {
    path: '/',
    httpOnly: true,
    sameSite: 'strict',
  })
  return { message: `Language set to ${lang}` }
}
