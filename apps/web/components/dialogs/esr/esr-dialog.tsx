'use client'

import { SessionDialogContent } from '@/components/dialogs/esr/esr-dialog-content'
import { useSigningRequest } from '@/hooks/use-signing-request'
import { Dialog, DialogContent } from '@repo/ui'

export function EsrDialog() {
  const { open, toggleOpen } = useSigningRequest()

  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
      {/* @ts-ignore */}
      <DialogContent className="box-content w-full sm:max-w-[430px]">
        <SessionDialogContent />
      </DialogContent>
    </Dialog>
  )
}
