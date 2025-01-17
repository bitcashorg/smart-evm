'use client'

import { useSession } from '@/hooks/use-session'
import { Dialog, DialogContent } from '@repo/ui'
import { SessionDialogContent } from './login-dialog-content'

export function SessionDialog() {
  const { showSessionDialog, toggleShowSessionDialog } = useSession()

  return (
    <Dialog open={showSessionDialog} onOpenChange={toggleShowSessionDialog}>
      {/* @ts-ignore */}
      <DialogContent className="box-content w-full sm:max-w-[430px]">
        <SessionDialogContent />
      </DialogContent>
    </Dialog>
  )
}
