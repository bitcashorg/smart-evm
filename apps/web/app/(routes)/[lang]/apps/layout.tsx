// app/(routes)/[lang]/apps/layout.tsx
'use client'

import { AuthProvider } from '@/contexts/auth-context'
import { Suspense } from 'react'

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col">
        {/* Apps-specific navigation could go here */}
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </div>
    </AuthProvider>
  )
}