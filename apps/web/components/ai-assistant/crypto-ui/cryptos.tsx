'use client'

import { Button } from '@/components/ui/button'
import { useActions, useUIState } from 'ai/rsc'
import type { AI } from '../actions/create-ai'

export function Cryptos({ props: cryptos }: { props: Crypto[] }) {
  const [, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions()

  console.log('Cryptos', { cryptos })

  return (
    <div className="w-full">
      <div className="mb-4 grid grid-cols-1 gap-2 overflow-y-auto pb-4 text-sm">
        {cryptos.map((crypto) => (
          <Button
            key={crypto.symbol}
            className="flex w-full cursor-pointer flex-col items-stretch gap-2 rounded-lg pr-2 text-left transition-colors hover:bg-transparent bg-transparent sm:flex-row sm:items-center"
            onClick={async () => {
              const response = await submitUserMessage([
                `View ${crypto.symbol}`,
              ])
              setMessages((currentMessages) => [...currentMessages, response])
            }}
          >
            <div className="flex flex-grow flex-col">
              <div className="font-bold uppercase text-foreground">
                {crypto.symbol}
              </div>
              <div className="text-base text-muted-foreground">
                ${formatCurrency(crypto.price)}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div
                className={`${
                  crypto.delta > 0 ? 'text-positive' : 'text-negative'
                } font-bold text-right uppercase`}
              >
                {`${formatPercentage(crypto.delta / crypto.price)}%`}
              </div>
              <div
                className={`${
                  crypto.delta > 0 ? 'text-positive' : 'text-negative'
                } text-right text-base`}
              >
                ${formatCurrency(Math.abs(crypto.delta))}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

// Helper functions
function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function formatPercentage(value: number): string {
  return (value * 100).toFixed(2)
}

interface Crypto {
  symbol: string
  price: number
  delta: number
}
