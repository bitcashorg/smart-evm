'use client'

import dynamic from 'next/dynamic'
import { CryptoSkeleton } from './crypto-skeleton'
import { CryptosSkeleton } from './cryptos-skeleton'
import { EventsSkeleton } from './events-skeleton'

export { spinner } from './spinner'
export { BotCard, BotMessage, SystemMessage } from '../chat-ui/chat-message'

const Crypto = dynamic(() => import('./crypto').then((mod) => mod.Crypto), {
  ssr: false,
  loading: () => <CryptoSkeleton />,
})

const Purchase = dynamic(
  () => import('./crypto-purchase').then((mod) => mod.Purchase),
  {
    ssr: false,
    loading: () => (
      <div className="h-[375px] rounded-xl border bg-zinc-950 p-4 text-positive sm:h-[314px]" />
    ),
  },
)

const Cryptos = dynamic(() => import('./cryptos').then((mod) => mod.Cryptos), {
  ssr: false,
  loading: () => <CryptosSkeleton />,
})

const Events = dynamic(() => import('./events').then((mod) => mod.Events), {
  ssr: false,
  loading: () => <EventsSkeleton />,
})

export { Crypto, Purchase, Cryptos, Events }
