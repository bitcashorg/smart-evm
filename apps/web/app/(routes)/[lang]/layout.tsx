import '@/app/globals.css'
import {
  FuturaPTBold,
  FuturaPTBook,
  FuturaPTDemi,
  FuturaPTMedium,
  LufgaBold,
} from '@/assets/fonts/fonts'
import Footer from '@/components/layout/footer/footer'
import { Header } from '@/components/layout/header'
import { Providers } from '@/components/layout/providers'
import { getDictionary } from '@/dictionaries'
import { locales } from '@/dictionaries/locales'
import { cn } from '@/lib/utils'
import type { CommonPageParams } from '@/types/routing.type'
import { GoogleAnalytics } from '@next/third-parties/google'
import '@rainbow-me/rainbowkit/styles.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import type React from 'react'
import { isMobile } from 'react-device-detect'
import { Toaster } from 'sonner'
import '../../globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const dict = await getDictionary(params.lang)
  return (
    <html
      lang={params.lang || 'en'}
      className={cn('tk-futura-pt max-w-full text-lg antialiased')}
      suppressHydrationWarning
    >
      <body
        style={{ width: '100%', maxWidth: '100%' }}
        className={`${FuturaPTBook.variable} ${FuturaPTMedium.variable} ${FuturaPTDemi.variable} ${FuturaPTBold.variable} ${LufgaBold.variable}`}
      >
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header lang={params.lang} dict={dict} />
          <Toaster position="bottom-right" />
          <main
            className={cn(
              'flex w-full max-w-[100vw] flex-1 flex-col',
              isMobile && 'overflow-hidden',
            )}
          >
            {children}
          </main>
          <Footer params={params} />
          <DynamicSessionDialog />
          <DynamicEsrDialog />
        </Providers>

        <GoogleAnalytics gaId="G-78N0Z7NPQJ" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

// generate static routes for a given set of locales,
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

const DynamicSessionDialog = dynamic(
  () =>
    import('../../../components/dialogs/session/session-dialog').then(
      (mod) => mod.SessionDialog,
    ),
  {
    ssr: false,
  },
)
const DynamicEsrDialog = dynamic(
  () => import('../../../components/dialogs/esr/esr-dialog').then((mod) => mod.EsrDialog),
  {
    ssr: false,
  },
)

interface RootLayoutProps {
  children: React.ReactNode
  params: CommonPageParams
}

export const metadata: Metadata = {
  title: {
    absolute: 'Bitlauncher',
    template: '%s | Bitlauncher',
  },
  description: 'Be part of the intelligent future and join the Ai/Web3 revolution now!',
  metadataBase: new URL('https://bitlauncher.ai'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://bitlauncher.ai',
    title: 'bitlauncher',
    description: 'Be part of the intelligent future and join the Ai/Web3 revolution now!',
    images: [
      {
        url: 'https://bitlauncher.ai/images/og-image.webp',
        alt: 'bitlauncher',
      },
    ],
  },
  twitter: {
    creator: 'bitlauncher',
    site: '@bitlauncher',
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bitlauncher.ai/images/og-image.webp',
        alt: 'bitlauncher',
      },
    ],
  },
  robots: 'index, search',
  keywords: [
    'bitlauncher',
    'smartsale',
    'ai',
    'web3',
    'crypto',
    'investment',
    'auction',
    'marketplace',
    'platform',
    'launchpad',
    'launch',
    'pad',
    'launching',
  ],
  other: {
    'google-site-verification': process.env.GOOGLE_SITE_VERIFICATION_TOKEN as string,
    'p:domain_verify': process.env.PINTEREST_DOMAIN_VERIFICATION_TOKEN as string,
    'theme-color': '#080e44',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  }
}
