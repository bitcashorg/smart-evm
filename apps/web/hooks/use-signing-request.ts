'use client'
import { useSession } from '@/hooks/use-session'
import { useSupabaseClient } from '@/services/supabase'
import { createContextHook } from '@blockmatic/hooks-utils'
import type { Tables } from '@repo/supabase'
import type { RealtimeChannel } from '@supabase/supabase-js'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import type { SigningRequest } from 'eosio-signing-request'
import { useEffect } from 'react'
import { useSetState } from 'react-use'

export const [useSigningRequest, UseSigningRequestProvider] = createContextHook(
  useSigningRequestFn,
  'You must wrap your application with <UseSigningRequestProvider /> in order to useSigningRequest().',
)

function useSigningRequestFn() {
  const supabase = useSupabaseClient()
  const { session } = useSession()
  const [state, setState] = useSetState<SignatureRequestState>(defaultState)

  const { mutate: requestSignature, ...props } = useMutation({
    mutationFn: async ({
      esr,
      callback,
    }: { esr: SigningRequest; callback?: (payload: Tables<'esr'>) => void }) => {
      console.log('requesting signature', esr.encode())
      if (!session?.account) throw new Error('bitcash account not found')
      const params = new URLSearchParams()

      params.append('source', 'bitlauncher.ai')
      const esrCode = esr.encode().replace('esr://', '')
      params.append('esr', esrCode)

      // we show the qr optimistically
      setState({
        esr,
        esrUrl: `https://app.bitcash.org?${params.toString()}`,
        open: true,
      })
      console.log('inserting esr', esr.encode())
      const response = await axios.post('/api/esr', {
        code: esr.encode(),
        account: session.account,
      })

      if (response.status !== 200) throw new Error('Failed to request signature')

      // handle success, possibly setting up a subscription to listen for changes
      const channelId = `esr-${esr.getInfoKey('uuid')}`
      console.log('🍓 subscribing to esr channel', channelId)
      const channel = supabase
        .channel(`esr-${esr.getInfoKey('uuid')}`)
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'esr' },
          (payload) => {
            console.log('🚀 ESR UPDATE!', payload)
            if (payload.new.id !== esr.getInfoKey('uuid')) return
            if (!payload.new.trx_id) return
            // call callback
            callback?.(payload.new as unknown as Tables<'esr'>)
            // if uuid matches remove channel and reset state
            console.log('🚀 unsubscribing from esr channel')
            state.channel && supabase.removeChannel(state.channel)
            setState(defaultState)
          },
        )
        .subscribe()

      setState({
        channel,
      })

      return response.data
    },
  })

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    return () => {
      if (state.channel) {
        console.log('💀 unsubscribing from esr channel')
        supabase.removeChannel(state.channel)
      }
    }
  }, [])

  const toggleOpen = () => setState(({ open }) => ({ open: !open }))

  return { toggleOpen, requestSignature, ...state, ...props }
}

interface SignatureRequestState {
  open: boolean
  esr: SigningRequest | null
  channel: RealtimeChannel | null
  esrUrl: string | null
}

const defaultState: SignatureRequestState = {
  open: false,
  esr: null,
  channel: null,
  esrUrl: null,
}
