'use client'

import { useSession } from '@/hooks/use-session'
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@repo/ui'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import QRCode from 'react-qr-code'

export function SessionDialogContent() {
  const { loginUri, toggleShowSessionDialog } = useSession()
  return (
    <>
      <DialogHeader className="gap-4">
        {/* @ts-ignore */}
        <DialogTitle className="text-center text-2xl whitespace-pre-line">
          {`Login or Register
          with bitcash Wallet`}
        </DialogTitle>
        {/* @ts-ignore */}
        <DialogDescription className="text-center text-infoForeground">
          Scan this QR code with your smartphone to login or register.
        </DialogDescription>
      </DialogHeader>
      {loginUri ? (
        <div className="qr-code-container">
          <QRCode
            size={256}
            style={{
              height: 'auto',
              maxWidth: '100%',
              width: '100%',
              borderRadius: 4,
            }}
            value={loginUri}
            viewBox="0 0 256 256"
          />
        </div>
      ) : null}

      <DialogFooter className="flex !flex-col border-t border-t-accent-600/50 pt-4 sm:justify-center">
        <Link
          href="/blog/bitcash/how-to-register-and-kyc-to-bitcash"
          className="transition-all items-center justify-center text-center text-accent-400 hover:text-accent focus-within:text-accent flex gap-2 cursor-pointer"
          onClick={toggleShowSessionDialog}
        >
          Learn more about the Bitcash KYC process
          <ChevronRight className="w-6 h-6" />
        </Link>
      </DialogFooter>
    </>
  )
}
