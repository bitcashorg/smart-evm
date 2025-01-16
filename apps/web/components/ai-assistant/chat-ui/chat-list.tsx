import { Separator } from '@/components/ui/separator'
import type { UIState } from '../actions/create-ai'

export interface ChatList {
  messages: UIState
  isShared: boolean
}

export function ChatList({ messages }: ChatList) {
  if (!messages.length) {
    return null
  }

  return (
    <div className="mx-auto max-w-2xl">
      {messages.map((message, index) => (
        <div key={message.id}>
          {message.display}
          {index < messages.length - 1 && <Separator className="my-4" />}
        </div>
      ))}
    </div>
  )
}
