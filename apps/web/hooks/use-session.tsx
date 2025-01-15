'use client'

import { getSesssion } from '@/app/actions/general'
import { upsertAccount } from '@/app/actions/upsert-account'
import { genLoginSigningRequest } from '@/lib/eos'
import { useSupabaseClient } from '@/services/supabase'
import { createContextHook } from '@blockmatic/hooks-utils'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import type { Tables } from '@repo/supabase'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { type ReactNode, useCallback, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useAsync, useLocalStorage, useToggle } from 'react-use'
import { v4 as uuidv4 } from 'uuid'
import { useAccount } from 'wagmi'
import { useMultibase } from './use-multibase'
import { useReferral } from './use-referral'

// Export SessionProvider and useSession hook
export { SessionProvider, useSession }

// Main session hook function
function useSessionFn() {
  // Initialize necessary hooks and state
  const supabase = useSupabaseClient()
  const account = useAccount()
  const [newSessionId] = useState(uuidv4())
  const searchParams = useSearchParams()
  const paramsSessionId = searchParams.get('session_id')
  const pathname = usePathname()
  const router = useRouter()
  const { openConnectModal } = useConnectModal()
  const { identifyUser } = useMultibase()
  const { bitcashRegisterUri } = useReferral()

  // Toggle for session dialog visibility
  const [showSessionDialog, toggleShowSessionDialog] = useToggle(false)

  // Local storage for session data
  const [session, setSession] = useLocalStorage<Tables<'session'> | null>(
    'bitcash-session',
  )

  // Generate login signing request
  const loginSR = useAsync(() => genLoginSigningRequest(newSessionId))
  const esrCode = loginSR?.value?.encode().toString().replace('esr://', '')
  const loginUri = `${bitcashRegisterUri}&esr=${esrCode}`

  // Function to start a new session
  const startSession = useCallback(
    (session: Tables<'session'>) => {
      setSession(session)
      upsertAccount({ account: session.account })
      identifyUser(account.address || '0x', {
        account: session?.account ?? 'unknown',
      })
    },
    [setSession, identifyUser, account.address],
  )

  // Effect to subscribe to Supabase session changes
  useEffect(() => {
    if (isMobile) return // Skip subscription on mobile
    const channel = supabase
      .channel('session')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'session' },
        (payload) => {
          if (session || payload.new.id !== newSessionId) return
          const newSession = payload.new as Tables<'session'>
          startSession(newSession)
          toggleShowSessionDialog(false)
        },
      )
      .subscribe()

    return () => {
      console.log(`🤖 unsubscribing to session ${newSessionId}`)
      supabase.removeChannel(channel)
    }
  }, [startSession, supabase, toggleShowSessionDialog, newSessionId, session])

  // Effect to handle session from URL parameters
  useEffect(() => {
    if (!paramsSessionId) return

    const getSession = async () => {
      console.log(`getting session ${paramsSessionId}`)
      const formData = new FormData()
      formData.append('session_id', paramsSessionId)

      const session = await getSesssion(formData)
      console.log(`session ${paramsSessionId}`, session)
      if (!session) return

      startSession(session)
      console.log('✅ session', session)

      // Clean up URL parameters
      const params = new URLSearchParams(searchParams)
      params.delete('session_id')
      router.replace(`${pathname}`)
    }

    getSession()
  }, [paramsSessionId, startSession, pathname, router, searchParams])

  // Function to handle login redirect (mobile)
  const loginRedirect = () => {
    console.log('loginRedirect', loginUri, openConnectModal)
    if (!loginUri || !open) return

    const params = new URLSearchParams(loginUri)
    const url = new URL(bitcashRegisterUri)
    const callbackUrl = `${window.location.href}?session_id=${newSessionId}`
    const encodedCallbackUrl = encodeURIComponent(callbackUrl)

    url.searchParams.append('callback', encodedCallbackUrl)
    url.searchParams.append('esr', params.get('esr') || '')

    location.href = url.toString()
  }

  // Function to handle login or connect wallet
  const loginOrConnect = () => {
    console.log('login or connect', session, openConnectModal, isMobile)

    if (isMobile) {
      session?.account && openConnectModal ? openConnectModal() : loginRedirect()
      return
    }

    session?.account && openConnectModal
      ? openConnectModal()
      : toggleShowSessionDialog(true)
  }

  // hack until new qr system is implemented
  const createAccount = () => {
    if (!isMobile) return loginOrConnect()
    // redirect to create account uri on mobile
    location.href = bitcashRegisterUri
  }

  // Function to handle logout
  const logout = () => {
    setSession(null)
    router.refresh()
  }

  // Return session-related data and functions
  return {
    newSessionId,
    session,
    loginUri,
    showSessionDialog,
    logout,
    loginRedirect,
    openConnectModal,
    loginOrConnect,
    toggleShowSessionDialog,
    createAccount,
  }
}

// SessionProvider component
function SessionProvider({ children }: { children: ReactNode }) {
  return (
    <React.Suspense fallback={<div />}>
      <SessionProviderInner>{children}</SessionProviderInner>
    </React.Suspense>
  )
}

// Create context hook for session
const [useSession, SessionProviderInner] = createContextHook(
  useSessionFn,
  'You must wrap your application with <SessionProvider /> in order to useSession().',
)
