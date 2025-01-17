'use client'

import { cn } from '@/lib/utils'
import { Button } from '@repo/ui'
import { useAIState, useUIState } from 'ai/rsc'
import { XIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useLocalStorage } from '../hooks/use-local-storage'
import type { Message } from '../types'
import { ChatList } from './chat-list'
import { ChatPanel } from './chat-panel'
import { EmptyScreen } from './empty-screen'

export function Chat({ id, className }: ChatProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [input, setInput] = useState('')
  const [messages] = useUIState()
  const [aiState] = useAIState()

  const [_chatId, setNewChatId] = useLocalStorage('newChatId', id)

  useEffect(() => {
    const messagesLength = aiState.messages?.length
    if (messagesLength === 2) {
      console.log('🍓 refresh')
      router.refresh()
    }
  }, [aiState.messages, router])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setNewChatId(id)
  }, [])

  const messagesRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    // Wrap the scrolling logic in requestAnimationFrame
    requestAnimationFrame(() => {
      if (messagesRef.current && scrollerRef.current) {
        // Force a reflow to ensure the latest DOM changes are applied
        scrollerRef.current?.scrollHeight

        // Optional: Smooth scroll to bottom
        scrollerRef.current?.scrollTo({
          top: scrollerRef.current.scrollHeight,
          behavior: 'smooth',
        })
      }
    })
  }

  const scrollToLatestQuestion = () => {
    requestAnimationFrame(() => {
      if (messagesRef.current && scrollerRef.current) {
        const messageHeight = messagesRef.current.clientHeight
        const scrollerHeight = scrollerRef.current.clientHeight
        const visibleHeight = scrollerRef.current.offsetHeight

        if (messageHeight > visibleHeight) {
          messagesRef.current.style.height = 'fit-content'
          // Force a reflow to ensure the latest DOM changes are applied
          messagesRef.current.offsetHeight
          const adjustedMessageHeight = messagesRef.current.clientHeight
          const newHeight = `${adjustedMessageHeight + scrollerHeight + 20}px`

          messagesRef.current.style.height = newHeight
        }
        scrollToBottom()
      }
    })
  }

  return (
    <div className="flex flex-col h-full sm:min-h-[calc(100dvh-160px)] sm:max-h-[calc(100dvh-160px)] h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-white">
          Bitlauncher AI Assistant
        </h2>
        <Link
          href={{
            pathname: pathname,
            query: new URLSearchParams(
              Object.fromEntries(
                Array.from(searchParams.entries()).filter(
                  ([key]) => key !== 'bot' && key !== 'chat',
                ),
              ),
            ).toString(),
          }}
          passHref
          legacyBehavior
        >
          <Button variant="ghost" size="icon" aria-label="Close">
            <XIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div
        ref={scrollerRef}
        className={cn('overflow-y-scroll scroll-smooth flex-grow h-full')}
      >
        <div
          ref={messagesRef}
          className={cn('pr-4 min-h-full text-xs', className)}
        >
          {messages.length ? (
            <ChatList messages={messages} isShared={false} />
          ) : (
            <EmptyScreen />
          )}
          <div className="w-full h-px" />
        </div>
      </div>

      <div className="flex-shrink-0 pt-5 ">
        <ChatPanel
          id={id}
          input={input}
          setInput={setInput}
          scrollToLatestQuestion={scrollToLatestQuestion}
        />
      </div>
    </div>
  )
}

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id: string
}
