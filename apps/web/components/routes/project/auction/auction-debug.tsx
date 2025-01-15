'use client'

import { type AuctionData, useAuctionData } from '@/hooks/use-auction-data'
import Link from 'next/link'
import { decodeAbiParameters, isAddress, isHex, parseAbiParameters } from 'viem'

export function AuctionDebug({ auctionId }: { auctionId: number }) {
  const { data: auction } = useAuctionData(auctionId)

  if (!auction) return <div>Loading Auction Debug...</div>
  // const auctionText = convertToYamlText(auction)

  return (
    <AuctionText>
      <pre>
        <code>{JSON.stringify(auction, null, 2)}</code>
      </pre>
    </AuctionText>
  )
}

function AuctionText({ children }: { children: React.ReactNode }) {
  return <div className="my-10 bg-black p-4 font-mono text-green-500">{children}</div>
}

// Function to format token amounts
const formatTokenAmount = (amount = '', decimals = 6) => {
  return (Number(amount) / Math.pow(10, decimals)).toFixed(2) // Adjust precision as needed
}

const convertToYamlText = (data: AuctionData): JSX.Element[] => {
  return Object.entries(data).map(([key, value]) => {
    // console.log(key, value)
    if (value instanceof Date) {
      value = value.toLocaleString()
    } else if (typeof value === 'string' && !isAddress(value) && !isHex(value)) {
      value = formatTokenAmount(value)
    } else if (isHex(value) && !isAddress(value)) {
      return value
    }

    return isAddress(value) ? (
      <div key={key}>
        {key}:{' '}
        <Link
          href={`https://explorer.testnet.evm.eosnetwork.com/address/${value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </Link>
      </div>
    ) : (
      <div key={key}>
        {key}: {value.toString()}
      </div>
    )
  })
}
