'use client'

import { Chat } from '@/components/ai-assistant/chat-ui'
import { DraggableResizableCard } from '@/components/shared/draggable-resizable-card'
import { Card } from '@/components/ui/card'

export function ChatDraggable({
  id,
  missingKeys,
}: { id: string; missingKeys: string[] }) {
  return (
    <DraggableResizableCard>
      <Card variant="padded" className="w-full">
        <Chat id={id} />
      </Card>
    </DraggableResizableCard>
  )
}
