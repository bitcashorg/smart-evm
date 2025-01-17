'use client'

import { useSigningRequest } from '@/hooks/use-signing-request'
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@repo/ui'
import QRCode from 'react-qr-code'

export function SessionDialogContent() {
  const { esrUrl } = useSigningRequest()
  return (
    <>
      <DialogHeader className="gap-4">
        {/* @ts-ignore */}
        <DialogTitle className="text-center text-2xl whitespace-pre-line">
          {'Bitcash Signing Request'}
        </DialogTitle>
        {/* @ts-ignore */}
        <DialogDescription className="text-center text-infoForeground">
          Scan this QR code with your smartphone to sign the transaction.
        </DialogDescription>
      </DialogHeader>
      {esrUrl ? (
        <div className="qr-code-container">
          <QRCode
            size={256}
            style={{
              height: 'auto',
              maxWidth: '100%',
              width: '100%',
              borderRadius: 4,
            }}
            value={esrUrl}
            viewBox="0 0 256 256"
          />
        </div>
      ) : null}

      <DialogFooter className="flex !flex-col border-t border-t-accent-600/50 pt-4 sm:justify-center">
        {/* <Link
          href="/blog/bitcash/how-to-register-and-kyc-to-bitcash"
          className="transition-all items-center justify-center text-center text-accent-400 hover:text-accent focus-within:text-accent flex gap-2 cursor-pointer"
          onClick={toggleOpen}
        >
          Learn more about the Bitcash KYC process
          <ChevronRight className="w-6 h-6" />
        </Link> */}
      </DialogFooter>
    </>
  )
}
