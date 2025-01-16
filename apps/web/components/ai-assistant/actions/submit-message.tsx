import 'server-only'
export const runtime = 'edge'

import { openai } from '@ai-sdk/openai'
import { HfInference } from '@huggingface/inference'
import { createStreamableValue, getMutableAIState, streamUI } from 'ai/rsc'
import { BotCard, BotMessage, Crypto, Purchase } from '../crypto-ui'

import { nanoid, sleep } from '@/lib/utils'
import { z } from 'zod'

import { CryptoSkeleton } from '../crypto-ui/crypto-skeleton'

import { MediaCard } from '@/components/shared/media-card'
import { createSupabaseServerClient } from '@/services/supabase'
import {
  fetchPublicYouTubePlaylist,
  searchYouTubeChannel,
} from '@/services/youtube'
import { AIMedia } from '../chat-ui/ai-media'
import { SpinnerMessage } from '../chat-ui/chat-message'
import { Cryptos } from '../crypto-ui/cryptos'
import { CryptosSkeleton } from '../crypto-ui/cryptos-skeleton'
import { Events } from '../crypto-ui/events'
import { EventsSkeleton } from '../crypto-ui/events-skeleton'
import type { AI } from './create-ai'

export async function submitUserMessage({
  content,
  embeddings,
}: { content: string; embeddings: number[] }) {
  'use server'

  console.log(
    '🍓 submit user message',
    content,
    'embeddings:',
    Boolean(embeddings.length),
  )

  let formattedEmbedding = JSON.stringify(embeddings)

  // If no embeddings provided, generate them using the worker
  if (!embeddings.length) {
    // Initialize Hugging Face client (make sure to set up environment variables)
    const hf = new HfInference(process.env.HUGGINGFACE_API_KEY)
    const embedding = await hf.featureExtraction({
      model: 'thenlper/gte-small',
      inputs: content,
    })

    // Format the embedding as a string array
    formattedEmbedding = `[${embedding.toString()}]`
  }

  // console.log('🍓 formattedEmbedding', formattedEmbedding)

  const aiState = getMutableAIState<typeof AI>()

  aiState.update({
    ...aiState.get(),
    messages: [
      ...aiState.get().messages,
      {
        id: nanoid(),
        role: 'user',
        content,
      },
    ],
  })

  let textStream: undefined | ReturnType<typeof createStreamableValue<string>>
  let textNode: undefined | React.ReactNode

  const supabase = await createSupabaseServerClient()

  const { data: documents, error: matchError } = await supabase
    .rpc('match_document_sections', {
      embedding: formattedEmbedding,
      match_threshold: 0.8,
    })
    .select('content')
    .limit(7)

  if (matchError) console.error(matchError)

  const injectedDocs =
    documents && documents.length > 0
      ? documents.map(({ content }) => content).join('\n\n')
      : 'No documents found'

  const mediaLinks =
    injectedDocs
      .match(/!\[.*?\]\((.*?)\)/g)
      ?.map((match) => {
        const url = match.match(/\((.*?)\)/)?.[1]
        return url ? { type: 'image', image: url } : null
      })
      .filter(Boolean) || []

  // Messages inside [] means that it's a UI element or a user event. For example:
  // - "[Price of BTC = 50000]" means that an interface of the price of Bitcoin is shown to the user.
  // - "[User has changed the amount of ETH to 5]" means that the user has changed the amount of Ethereum to 5 in the UI.

  // If the user requests purchasing a cryptocurrency, call \`show_crypto_purchase_ui\` to show the purchase UI.
  // If the user just wants the price, call \`show_crypto_price\` to show the price.
  // If you want to show trending cryptocurrencies, call \`list_cryptos\`.
  // If you want to show crypto market events, call \`get_crypto_events\`.
  // If the user wants to sell cryptocurrency, explain that selling is not available in this demo.
  // If they ask for news dont use documents, ignore them.

  // console.log('🍓 injectedDocs', injectedDocs)

  const result = await streamUI({
    model: openai('gpt-4o'),
    initial: <SpinnerMessage />,
    system: `\
    You are an AI assistant for bitlauncher.ai, specializing in the bitlauncher and bitcash ecosystem, crypto markets, blockchain, and AI technology. 
    Your primary role is to answers questions about documents:

    1. Guide users through the bitlauncher.ai registration process step-by-step.
    2. Discuss bitlauncher and bitcash ecosystem topics, including: 
       - News and updates
       - Ongoing and upcoming auctions
       - Tokenomics
       - Information from the official blog

    3. Provide insights on crypto trends, blockchain technology, and AI advancements.
    4. Perform calculations related to crypto and blockchain topics when needed.

    Key guidelines:
    - Prioritize using the information from the documents provided below. Be concise and to the point.
    - If the documents don't contain the necessary information, use your general knowledge about crypto, blockchain, and AI.
    - Format all mathematical responses using KaTeX for clear presentation. Use double $$ for inline math and single $ for display math.
    - If asked about topics outside of scope, respond with:
      "I can only help with bitlauncher, bitcash, crypto, blockchain, and AI topics. What would you like to know about those?"
    - If the user requests video content, use the 'videos' command to search and display relevant video content.

    Documents:
    ${injectedDocs}
    Media Links:
    ${mediaLinks.map((link) => link?.image).join('\n')}


    `,
    messages: [
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      ...aiState.get().messages.map((message: any) => ({
        role: message.role,
        content: message.content,
        name: message.name,
      })),
    ],
    text: ({ content, done, delta }) => {
      if (!textStream) {
        textStream = createStreamableValue('')
        textNode = <BotMessage content={textStream.value} />
      }

      if (done) {
        textStream.done()
        aiState.done({
          ...aiState.get(),
          messages: [
            ...aiState.get().messages,
            {
              id: nanoid(),
              role: 'assistant',
              content,
            },
          ],
        })
      } else {
        textStream.update(delta)
      }

      return textNode
    },
    tools: {
      media: {
        description: 'Search and display relevant video content and news',
        parameters: z.object({
          query: z
            .string()
            .describe('The search query for finding relevant media content'),
          type: z
            .enum(['video', 'news', 'both'])
            .describe('Type of media content to search for'),
        }),
        generate: async function* ({ query, type }) {
          console.log('🍓 media', query, type)
          yield <BotCard>Searching for media...</BotCard>

          try {
            if (type === 'news') {
              const playlistId = 'PL6BKGVqekhB_R8wjPFN-p6dGkcIy_bM1D'
              const playlistItems = await fetchPublicYouTubePlaylist({
                playlistId,
                maxResults: 5,
              })

              if (!playlistItems.length) {
                return <BotCard>No news videos found.</BotCard>
              }

              const videos = playlistItems.map((item) => ({
                thumbnailUrl: `https://img.youtube.com/vi/${item.snippet.resourceId.videoId}/0.jpg`,
                videoUrl: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
                title: item.snippet.title,
              }))

              return (
                <AIMedia
                  title={playlistItems[0].snippet.title}
                  description={playlistItems[0].snippet.description}
                  videos={videos}
                />
              )
            }

            const searchResults = await searchYouTubeChannel({
              channelId: 'UChzuWZjo_PvOrRTDfkojp3w',
              query,
              maxResults: 5,
            })

            if (!searchResults.length) {
              return <BotCard>No videos found matching your query.</BotCard>
            }

            const videos = searchResults.map((video) => ({
              thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/0.jpg`,
              videoUrl: `https://www.youtube.com/embed/${video.videoId}`,
              title: video.title,
            }))

            return (
              <AIMedia
                title={searchResults[0].title}
                description={searchResults[0].description}
                videos={videos}
              />
            )
          } catch (error) {
            console.error('Error fetching media:', error)
            return <BotCard>Failed to load media content.</BotCard>
          }
        },
      },
      listCryptos: {
        description: 'List three trending cryptocurrencies.',
        parameters: z.object({
          cryptos: z.array(
            z.object({
              symbol: z.string().describe('The symbol of the cryptocurrency'),
              price: z.number().describe('The price of the cryptocurrency'),
              delta: z
                .number()
                .describe('The change in price of the cryptocurrency'),
            }),
          ),
        }),
        generate: async function* ({ cryptos }) {
          yield (
            <BotCard>
              <CryptosSkeleton />
            </BotCard>
          )

          await sleep(1000)

          const toolCallId = nanoid()

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'assistant',
                content: [
                  {
                    type: 'tool-call',
                    toolName: 'listCryptos',
                    toolCallId,
                    args: { cryptos },
                  },
                ],
              },
              {
                id: nanoid(),
                role: 'tool',
                content: [
                  {
                    type: 'tool-result',
                    toolName: 'listCryptos',
                    toolCallId,
                    result: cryptos,
                  },
                ],
              },
            ],
          })

          return (
            <BotCard>
              <Cryptos props={cryptos} />
            </BotCard>
          )
        },
      },
      showCryptoPrice: {
        description:
          'Get the current price of a given cryptocurrency. Use this to show the price to the user.',
        parameters: z.object({
          symbol: z
            .string()
            .describe('The symbol of the cryptocurrency. e.g. BTC/ETH/DOGE.'),
          price: z.number().describe('The price of the cryptocurrency.'),
          delta: z
            .number()
            .describe('The change in price of the cryptocurrency'),
        }),
        generate: async function* ({ symbol, price, delta }) {
          yield (
            <BotCard>
              <CryptoSkeleton />
            </BotCard>
          )

          await sleep(1000)

          const toolCallId = nanoid()

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'assistant',
                content: [
                  {
                    type: 'tool-call',
                    toolName: 'showCryptoPrice',
                    toolCallId,
                    args: { symbol, price, delta },
                  },
                ],
              },
              {
                id: nanoid(),
                role: 'tool',
                content: [
                  {
                    type: 'tool-result',
                    toolName: 'showCryptoPrice',
                    toolCallId,
                    result: { symbol, price, delta },
                  },
                ],
              },
            ],
          })

          return (
            <BotCard>
              <Crypto symbol={symbol} price={price} delta={delta} />
            </BotCard>
          )
        },
      },
      showCryptoPurchase: {
        description:
          'Show price and the UI to purchase a cryptocurrency. Use this if the user wants to purchase a cryptocurrency.',
        parameters: z.object({
          symbol: z
            .string()
            .describe('The symbol of the cryptocurrency. e.g. BTC/ETH/DOGE.'),
          price: z.number().describe('The price of the cryptocurrency.'),
          amount: z
            .number()
            .optional()
            .describe(
              'The amount of cryptocurrency to purchase. Can be optional if the user did not specify it.',
            ),
        }),
        generate: async function* ({ symbol, price, amount = 1 }) {
          yield <BotCard>processing request...</BotCard>
          const toolCallId = nanoid()

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'assistant',
                content: [
                  {
                    type: 'tool-call',
                    toolName: 'showCryptoPurchase',
                    toolCallId,
                    args: { symbol, price, amount },
                  },
                ],
              },
              {
                id: nanoid(),
                role: 'tool',
                content: [
                  {
                    type: 'tool-result',
                    toolName: 'showCryptoPurchase',
                    toolCallId,
                    result: {
                      symbol,
                      price,
                      amount,
                      status: 'expired',
                    },
                  },
                ],
              },
              {
                id: nanoid(),
                role: 'system',
                content: '[User has selected an invalid amount]',
              },
            ],
          })

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'assistant',
                content: [
                  {
                    type: 'tool-call',
                    toolName: 'showCryptoPurchase',
                    toolCallId,
                    args: { symbol, price, amount },
                  },
                ],
              },
              {
                id: nanoid(),
                role: 'tool',
                content: [
                  {
                    type: 'tool-result',
                    toolName: 'showCryptoPurchase',
                    toolCallId,
                    result: {
                      symbol,
                      price,
                      amount,
                    },
                  },
                ],
              },
            ],
          })

          return (
            <BotCard>
              <Purchase
                symbol={symbol}
                price={price}
                amount={amount}
                status="requires_action"
              />
            </BotCard>
          )
        },
      },
      getCryptoEvents: {
        description:
          'List recent events related to cryptocurrency market activity.',
        parameters: z.object({
          events: z.array(
            z.object({
              date: z
                .string()
                .describe('The date of the event, in ISO-8601 format'),
              headline: z.string().describe('The headline of the event'),
              description: z.string().describe('The description of the event'),
            }),
          ),
        }),
        generate: async function* ({ events }) {
          yield (
            <BotCard>
              <EventsSkeleton />
            </BotCard>
          )

          await sleep(1000)

          const toolCallId = nanoid()

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'assistant',
                content: [
                  {
                    type: 'tool-call',
                    toolName: 'getCryptoEvents',
                    toolCallId,
                    args: { events },
                  },
                ],
              },
              {
                id: nanoid(),
                role: 'tool',
                content: [
                  {
                    type: 'tool-result',
                    toolName: 'getCryptoEvents',
                    toolCallId,
                    result: events,
                  },
                ],
              },
            ],
          })

          return (
            <BotCard>
              <Events props={events} />
            </BotCard>
          )
        },
      },
    },
  })

  return {
    id: nanoid(),
    display: result.value,
  }
}
