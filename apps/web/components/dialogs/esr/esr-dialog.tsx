'use client'

import { SessionDialogContent } from '@/components/dialogs/esr/esr-dialog-content'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useSigningRequest } from '@/hooks/use-signing-request'

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
