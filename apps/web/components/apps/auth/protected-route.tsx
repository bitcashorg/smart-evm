// components/apps/protected-route.tsx
'use client'

import { useAuth } from '@/contexts/auth-context'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    redirect('/apps/login')
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  )
}