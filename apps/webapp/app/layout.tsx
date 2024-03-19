import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Toaster } from 'react-hot-toast'

import '@/app/globals.css'
import { ErrorModal } from '@/components/error-dialog'
import { Header } from '@/components/header'
import { Newsletter } from '@/components/newletter'
import { Providers } from '@/components/providers'
import { cn } from '@/lib/utils'
import '@rainbow-me/rainbowkit/styles.css'
import React from 'react'

export default function RootLayout({ children, ...props }: RootLayoutProps) {
  // const pathname = headers().get('referer') ? new URL(headers().get('referer') || '')?.pathname || 'home' : ''

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased overflow-x-hidden',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <div className="relative flex size-full min-h-screen items-center justify-center bg-muted/20 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
          <div className="max-w-1/2 pointer-events-none fixed inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle_at_center,transparent_83%,#0002)] dark:bg-black" />
          {/* Radial gradient for the container to give a faded look */}
          <Toaster />
          <Providers
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col w-full h-full items-start justify-start">
              <Header />
              <main className="flex flex-col flex-1 py-5">
                <div className="container">
                  {children}
                </div>
                <Newsletter />
              </main>
            </div>
            <ErrorModal />
            {/* <TailwindIndicator /> */}
          </Providers>
        </div>
      </body>
    </html>
  )
}

interface RootLayoutProps {
  children: React.ReactNode
}
