'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useSession } from '@/hooks/use-session'
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
