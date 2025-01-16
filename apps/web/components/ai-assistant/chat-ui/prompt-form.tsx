'use client'

import { useActions, useUIState } from 'ai/rsc'
import { useRouter, useSearchParams } from 'next/navigation'
import * as React from 'react'
import { isMobile } from 'react-device-detect'
import Textarea from 'react-textarea-autosize'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import type { Message } from 'ai'
import { nanoid } from 'nanoid'
import { useCallback, useEffect, useRef } from 'react'
import { useEnterSubmit } from '../hooks/use-enter-submit'
import { IconArrowElbow } from './chat-icons'
import { UserMessage } from './chat-message'

export function PromptForm({
  input,
  setInput,
  scrollToLatestQuestion,
}: PromptFormProps) {
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  const { submitUserMessage } = useActions()
  const [, setMessages] = useUIState()
  const router = useRouter()
  const searchParams = useSearchParams()
  const workerRef = useRef<Worker>()

  // focus input on desktop load
  React.useEffect(() => {
    if (!isMobile) inputRef.current?.focus()
  }, [])

  const handleSubmit = useCallback(
    async ({ embeddings, text }: { embeddings: string; text: string }) => {
      console.log('🍓 handleSubmit', text)

      const trimmedInput = input.trim()
      if (!trimmedInput) return
      console.log('🍓 trimmedInput', trimmedInput)

      setInput('')

      const commandInput = trimmedInput.startsWith('/')
        ? await handleCommand(trimmedInput, router, searchParams)
        : ''

      console.log({ commandInput })

      let newMessage = trimmedInput

      if (commandInput) {
        if (typeof commandInput === 'object' && commandInput !== null) {
          const { instruction, image } = commandInput
          newMessage = `${trimmedInput}\n\nINSTRUCTION: ${instruction}`
        } else {
          newMessage = `${trimmedInput}\n\nIMPORTANT: ${commandInput}`
        }
      } else {
        newMessage = trimmedInput
      }

      console.log('🍓 newMessage', newMessage)

      try {
        setMessages((currentMessages: Message[]) => [
          ...currentMessages,
          {
            id: nanoid(),
            display: <UserMessage>{trimmedInput}</UserMessage>,
          },
        ])

        scrollToLatestQuestion()

        console.log('🍓 submitting user message')
        const responseMessage = await submitUserMessage({
          content: newMessage,
          embeddings: embeddings || [],
        })

        setMessages((currentMessages: Message[]) => [
          ...currentMessages,
          responseMessage,
        ])
      } catch (error) {
        console.error('Error submitting user message:', error)
        setMessages((currentMessages: Message[]) => [
          ...currentMessages,
          {
            id: nanoid(),
            display: <UserMessage>{trimmedInput}</UserMessage>,
          },
          {
            id: nanoid(),
            content:
              "Sorry, I couldn't process that message. Please try again.",
            role: 'assistant',
          },
        ])
      }
    },
    [
      input,
      router,
      searchParams,
      setInput,
      setMessages,
      scrollToLatestQuestion,
      submitUserMessage,
    ],
  )

  useEffect(() => {
    console.log('🍀 creating worker')
    try {
      const worker = new Worker('/workers/import.worker.js', {
        type: 'module',
      })
      workerRef.current = worker
      console.log('🍀 worker created', worker, workerRef.current)

      workerRef.current.onmessage = (event) => {
        console.log('🍀 worker onmessage', event.data)
        handleSubmit(event.data)
      }

      workerRef.current.onerror = (event) => {
        console.error('🍀 Worker error:', event)
      }

      workerRef.current.onmessageerror = (event) => {
        console.error('🍀 Worker message error:', event)
      }

      console.log('🍀 worker configured', workerRef.current)
    } catch (error) {
      console.error('🍀 Error creating worker:', error)
    }

    return () => {
      console.log('🍀 terminating worker')
      workerRef.current?.terminate()
    }
  }, [handleSubmit])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        workerRef.current?.postMessage({ text: input.trim() })
      }}
      ref={formRef}
    >
      <Card
        variant="outline"
        className="relative flex max-h-50 w-full grow flex-col overflow-hidden"
      >
        <Textarea
          ref={inputRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message."
          spellCheck={false}
          className="min-h-[60px] w-full h-full resize-none bg-transparent pt-4 focus-within:outline-none text-xs pr-10"
        />
        <div className="absolute right-2 top-6 sm:right-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button type="submit" size="icon" disabled={input === ''}>
                  <IconArrowElbow />
                  <span className="sr-only">Send message</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Send message</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Card>
    </form>
  )
}

type CommandHandler = (
  args: string[],
  router: ReturnType<typeof useRouter>,
  searchParams: ReturnType<typeof useSearchParams>,
) => Promise<string | null>

const commandHandlers: Record<string, CommandHandler> = {}

async function handleCommand(
  command: string,
  router: ReturnType<typeof useRouter>,
  searchParams: ReturnType<typeof useSearchParams>,
): Promise<string> {
  const [cmd, ...args] = command.trim().toLowerCase().split(' ')
  const handler = commandHandlers[cmd]

  if (handler) {
    const result = await handler(args, router, searchParams)
    return result ?? ''
  }

  return `Unknown command. Available commands: ${Object.keys(commandHandlers).join(', ')}`
}

interface PromptFormProps {
  input: string
  setInput: (value: string) => void
  scrollToLatestQuestion: () => void
}
