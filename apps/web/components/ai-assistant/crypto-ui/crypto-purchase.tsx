'use client'

import { formatNumber } from '@/lib/utils'
import { useAIState, useActions, useUIState } from 'ai/rsc'
import { useId, useState } from 'react'
import type { AI } from '../actions/create-ai'

interface Purchase {
  symbol: string
  price: number
  amount?: number
  status: 'requires_action' | 'completed' | 'expired'
}

export function Purchase({
  amount,
  symbol,
  price,
  status = 'expired',
}: Purchase) {
  const [value, setValue] = useState(amount || 100)
  const [purchasingUI, setPurchasingUI] = useState<null | React.ReactNode>(null)
  const [aiState, setAIState] = useAIState<typeof AI>()
  const [, setMessages] = useUIState<typeof AI>()
  const { confirmPurchase } = useActions()

  const id = useId()

  function onSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.target.value)
    setValue(newValue)

    const message = {
      role: 'system' as const,
      content: `[User has changed to purchase ${newValue} shares of ${name}. Total cost: $${(newValue * price).toFixed(2)}]`,
      id,
    }

    if (aiState.messages[aiState.messages.length - 1]?.id === id) {
      setAIState({
        ...aiState,
        messages: [...aiState.messages.slice(0, -1), message],
      })
      return
    }

    setAIState({ ...aiState, messages: [...aiState.messages, message] })
  }

  return (
    <div className="p-4 text-positive border rounded-xl">
      <div className="inline-block float-right px-2 py-1 text-xs rounded-full bg-positive/10">
        +1.23% ↑
      </div>
      <div className="text-lg text-neutral-light">{symbol}</div>
      <div className="text-3xl font-bold">${price}</div>
      {purchasingUI ? (
        <div className="mt-4 text-neutral-light">{purchasingUI}</div>
      ) : status === 'requires_action' ? (
        <>
          <div className="relative pb-6 mt-6">
            <p>Leverage</p>
            <input
              id="labels-range-input"
              type="range"
              value={value}
              onChange={onSliderChange}
              min="10"
              max="1000"
              className="w-full h-1 rounded-lg appearance-none cursor-pointer bg-neutral-dark accent-positive"
            />
            <span className="absolute text-xs bottom-1 start-0 text-neutral">
              10
            </span>
            <span className="absolute text-xs -translate-x-1/2 bottom-1 start-1/3 text-neutral rtl:translate-x-1/2">
              100
            </span>
            <span className="absolute text-xs -translate-x-1/2 bottom-1 start-2/3 text-neutral rtl:translate-x-1/2">
              500
            </span>
            <span className="absolute text-xs bottom-1 end-0 text-neutral">
              1000
            </span>
          </div>

          <div className="mt-6">
            <p>Total cost</p>
            <div className="flex flex-wrap items-center text-xl font-bold sm:items-end sm:gap-2 sm:text-3xl">
              <div className="flex flex-col basis-1/3 tabular-nums sm:basis-auto sm:flex-row sm:items-center sm:gap-2">
                {value}
                <span className="mb-1 text-sm font-normal text-neutral sm:mb-0">
                  tokens
                </span>
              </div>
              <div className="text-center basis-1/3 sm:basis-auto">×</div>
              <span className="flex flex-col basis-1/3 tabular-nums sm:basis-auto sm:flex-row sm:items-center sm:gap-2">
                ${price}
                <span className="mb-1 ml-1 text-sm font-normal text-neutral sm:mb-0">
                  price
                </span>
              </span>
              <div className="pt-2 mt-2 text-center border-t basis-full border-t-neutral-dark sm:mt-0 sm:basis-auto sm:border-0 sm:pt-0 sm:text-left">
                = <span>{formatNumber(value * price)}</span>
              </div>
            </div>
          </div>

          <button
            className="w-full px-4 py-2 mt-6 font-bold bg-positive rounded-lg text-background hover:bg-positive/90"
            onClick={async () => {
              const response = await confirmPurchase(symbol, price, value)
              setPurchasingUI(response.purchasingUI)

              setMessages((currentMessages) => [
                ...currentMessages,
                response.newMessage,
              ])
            }}
          >
            Purchase
          </button>
        </>
      ) : status === 'completed' ? (
        <p className="mb-2 text-foreground">
          You have successfully purchased {value} ${symbol}. Total cost:{' '}
          {formatNumber(value * price)}
        </p>
      ) : status === 'expired' ? (
        <p className="mb-2 text-foreground">
          Your checkout session has expired!
        </p>
      ) : null}
    </div>
  )
}
