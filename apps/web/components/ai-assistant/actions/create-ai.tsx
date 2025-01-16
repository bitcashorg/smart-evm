import 'server-only'

import { nanoid } from '@/lib/utils'
import { createAI, getAIState } from 'ai/rsc'
import { UserMessage } from '../chat-ui/chat-message'
import { BotCard, BotMessage, Crypto, Purchase } from '../crypto-ui'
import { Cryptos } from '../crypto-ui/cryptos'
import { Events } from '../crypto-ui/events'
import type { Chat, Message } from '../types'
import { submitUserMessage } from './submit-message'
import { confirmPurchase } from './trade'

export const AI = createAI<AIState, UIState>({
  actions: {
    submitUserMessage,
    confirmPurchase,
  },
  initialUIState: [],
  initialAIState: { chatId: nanoid(), messages: [] },
  onGetUIState: async () => {
    'use server'

    const session = await auth()

    if (session?.user) {
      const aiState = getAIState() as Chat

      if (aiState) {
        const uiState = getUIStateFromAIState(aiState)
        return uiState
      }
    } else {
      return
    }
  },
  onSetAIState: async ({ state, done }) => {
    'use server'

    if (!done) return

    const session = await auth()
    if (!session || !session.user) return

    const { chatId, messages } = state

    const createdAt = new Date()
    const userId = session.user.id as string
    const path = `/chat/${chatId}`

    const firstMessageContent = messages[0].content as string
    const title = firstMessageContent.substring(0, 100)

    const chat: Chat = {
      id: chatId,
      title,
      userId,
      createdAt,
      messages,
      path,
    }

    // await saveChat(chat);
  },
})

export const getUIStateFromAIState = (aiState: Chat) => {
  return aiState.messages
    .filter((message) => message.role !== 'system')
    .map((message, index) => ({
      id: `${aiState.chatId}-${index}`,
      display:
        message.role === 'tool' ? (
          message.content.map((tool) => {
            return tool.toolName === 'listCryptos' ? (
              <BotCard key={`${tool.toolName}-${nanoid()}`}>
                {/* TODO: Infer types based on the tool result*/}
                {/* @ts-expect-error */}
                <Cryptos props={tool.result} />
              </BotCard>
            ) : tool.toolName === 'showCryptoPrice' ? (
              <BotCard key={`${tool.toolName}-${nanoid()}`}>
                {/* @ts-expect-error */}
                <Crypto props={tool.result} />
              </BotCard>
            ) : tool.toolName === 'showCryptoPurchase' ? (
              <BotCard key={`${tool.toolName}-${nanoid()}`}>
                {/* @ts-expect-error */}
                <Purchase props={tool.result} />
              </BotCard>
            ) : tool.toolName === 'getCryptoEvents' ? (
              <BotCard key={`${tool.toolName}-${nanoid()}`}>
                {/* @ts-expect-error */}
                <Events props={tool.result} />
              </BotCard>
            ) : null
          })
        ) : message.role === 'user' ? (
          <UserMessage>{message.content as string}</UserMessage>
        ) : message.role === 'assistant' &&
          typeof message.content === 'string' ? (
          <BotMessage content={message.content} />
        ) : null,
    }))
}

export type AIState = {
  chatId: string
  messages: Message[]
}

export type UIState = {
  id: string
  display: React.ReactNode
}[]

// mocked auth to single user for demo
function auth() {
  return { user: { id: '0x' } }
}

export async function getMissingKeys() {
  const keysRequired = ['OPENAI_API_KEY']
  return keysRequired
    .map((key) => (process.env[key] ? '' : key))
    .filter((key) => key !== '')
}
