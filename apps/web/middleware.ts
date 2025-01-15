import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { type NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from './dictionaries/locales'

export async function middleware(request: NextRequest) {
  // Create response
  const response = NextResponse.next()
  
  // Create Supabase client and refresh session
  const supabase = createMiddlewareClient({ req: request, res: response })
  await supabase.auth.getSession()

  // Handle Locale
  const { pathname } = request.nextUrl

  const hasLang = locales.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`,
  )

  if (hasLang) return response

  // Get locale and redirect if needed
  const lang = getLocale(request)
  request.nextUrl.pathname = `/${lang}${pathname}`

  return NextResponse.redirect(request.nextUrl)
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
    // Matcher that includes files needed for both locale and auth
    '/((?!_next/static|_next/image|images|api|studio|media|favicon.ico).*)',
  ],
}