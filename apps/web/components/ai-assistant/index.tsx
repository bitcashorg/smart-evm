import { nanoid } from '@/lib/utils'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { AI } from './actions/create-ai'

export function AiAssistant() {
  const id = nanoid()

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <Suspense fallback={<ChatFallback />}>
        <ChatAnimated chatId={id} />
      </Suspense>
    </AI>
  )
}

// Simple fallback component
function ChatFallback() {
  return (
    <div className="flex h-[600px] w-full items-center justify-center">
      <div className="animate-pulse text-muted-foreground">Loading chat...</div>
    </div>
  )
}

const ChatAnimated = dynamic(
  () => import('./chat-ui/chat-animated').then((mod) => mod.ChatAnimated),
  {
    ssr: false,
    loading: ChatFallback,
  },
)
