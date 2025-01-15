// app/(routes)/[lang]/apps/auth/callback/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
 try {
   const requestUrl = new URL(request.url)
   const code = requestUrl.searchParams.get('code')
   console.log('Auth callback received with code:', !!code)

   if (code) {
     const cookieStore = cookies()
     const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
     const { data, error } = await supabase.auth.exchangeCodeForSession(code)
     
     if (error) {
       console.error('Auth error:', error)
       throw error
     }
     
     console.log('Auth successful:', !!data.session)
   }

   // URL to redirect to after sign in process completes
   return NextResponse.redirect(new URL('/apps/dashboard', request.url))
 } catch (error) {
   console.error('Callback error:', error)
   return NextResponse.redirect(new URL('/apps/login', request.url))
 }
}