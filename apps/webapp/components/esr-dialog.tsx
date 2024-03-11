'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { useSession } from '@/hooks/use-session'
import { esrOptions } from '@/lib/eos'
import { supabase } from '@/lib/supabase'
import { createContextHook } from '@blockmatic/hooks-utils'
import { RealtimeChannel } from '@supabase/supabase-js'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { SigningRequest } from 'eosio-signing-request'
import Link from 'next/link'
import { ReactNode, useEffect } from 'react'
import QRCode from 'react-qr-code'
import { useSetState } from 'react-use'
import { undefined } from 'zod'

interface SignatureRequestState {
  open: boolean
  esr: SigningRequest | null
  channel: RealtimeChannel | null
}

const defaultState: SignatureRequestState = {
  open: false,
  esr: null,
  channel: null
}

function useSignatureRequestFn() {
  const { session } = useSession()
  const [state, setState] = useSetState<SignatureRequestState>(defaultState)

  const { mutate: requestSignature, ...props } = useMutation({
    mutationFn: async (esr: SigningRequest) => {
      if (!session?.account) throw new Error('bitcash account not found')

      // we show the qr optimistically
      setState({
        esr,
        open: true
      })
      console.log('inserting esr', esr.encode())
      const response = await axios.post('/api/esr-entry', {
        code: esr.encode(),
        account: session.account
      })
      return response.data
    },
    onSuccess: ({ data }) => {
      console.log('on success')
      const esr = SigningRequest.from(data.code, esrOptions)

      // handle success, possibly setting up a subscription to listen for changes
      const channel = supabase
        .channel('esr')
        .on(
          'postgres_changes',
          { event: 'UPDATE', schema: 'public', table: 'esr' },
          payload => {
            console.log('ESR UPDATE!', payload)
            if (payload.new.id !== esr.getInfoKey('uuid')) return
            if (!payload.new.trx_id) return
            // if uuid matches remove channel and reset state
            supabase.removeChannel(state.channel!)
            setState(defaultState)
          }
        )
        .subscribe()

      setState({
        channel
      })
    }
  })

  const toggleOpen = () => setState(({ open }) => ({ open: !open }))

  return { toggleOpen, requestSignature, ...state, ...props }
}

const [useSignatureRequest, UseSignatureRequestProvider] = createContextHook(
  useSignatureRequestFn,
  'You must wrap your application with <UseSignatureRequestProvider /> in order to useSignatureRequest().'
)

function EsrDialog() {
  const { open, toggleOpen, esr } = useSignatureRequest()
  const code = esr?.encode().replace('esr://', '') || ''
  console.log('dialog code', esr, code)
  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
      {/* <DialogTrigger asChild>
        <Button>Trigger</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>
            Scan this qr code on your bitcash app and sign.
          </DialogDescription>
        </DialogHeader>
        {esr ? (
          <div
            style={{
              height: 'auto',
              margin: '0 auto',
              maxWidth: 300,
              width: '100%',
              background: 'white',
              padding: 10
            }}
          >
            <QRCode
              size={256}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              value={code}
              viewBox={`0 0 256 256`}
            />
          </div>
        ) : null}
        <DialogFooter className="flex sm:justify-center ">
          <Link href={'https://app.bitcash.org/?share=JVnL7qzrU '}>
            <Button>Get Bitcash App</Button>
          </Link>
          <Button>Sign on Desktop</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const SignatureRequestProvider = ({ children }: { children: ReactNode }) => {
  return (
    <UseSignatureRequestProvider>
      {children}
      <EsrDialog />
    </UseSignatureRequestProvider>
  )
}

export { useSignatureRequest, SignatureRequestProvider }
