import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { type NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from './dictionaries/locales'
import { cookies } from 'next/headers'

export function middleware(request: NextRequest) {
  const cookieStore = cookies()
  // Handle Locale
  const { pathname, ...rest } = request.nextUrl

  const hasLang = locales.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`,
  )

  let response: NextResponse

  if (hasLang) {
    response = NextResponse.next({ request })
  } else {
    const lang = getLocale(request)
    request.nextUrl.pathname = `/${lang}${pathname}`
    response = NextResponse.redirect(request.nextUrl)
  }

  return response
}

function getLocale(request: NextRequest): string {
  const cookieLang = request.cookies.get('lang')
  if (cookieLang) return cookieLang.value

  const negotiator = new Negotiator({
    headers: {
      'accept-language': request.headers.get('accept-language') || '',
    },
  })
  const languages = negotiator.languages()
  return match(languages, locales, defaultLocale)
}

export const config = {
  matcher: [
    '/((?!_next|_nextjs|images|api|studio|workers|media|favicon.ico|__nextjs_original-stack-frame).*)',
  ],
}