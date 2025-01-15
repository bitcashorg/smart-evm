import { TestnetEasyAuction } from '@repo/auction'
import { useReadContract } from 'wagmi'

export function useAuctionData(auctionId: number) {
  const {
    data: rawData,
    isError,
    isLoading,
  } = useReadContract({
    ...TestnetEasyAuction,
    functionName: 'auctionData',
    args: [auctionId],
  })

  const data = rawData ? mapArrayToAuctionData(rawData) : undefined
  // console.log(rawData)
  //  Array.isArray(rawData) && console.log('initialAuctionOrder', rawData[4])

  return { data, isError, isLoading }
}

function mapArrayToAuctionData(data: unknown): AuctionData | undefined {
  if (!Array.isArray(data)) return

  return {
    auctioningToken: data[0],
    biddingToken: data[1],
    orderCancellationEndDate: new Date(Number(data[2]) * 1000),
    auctionEndDate: new Date(Number(data[3]) * 1000),
    initialAuctionOrder: JSON.stringify(readableOrder(decodeOrder(data[4]))),
    minimumBiddingAmountPerOrder: data[5].toString(),
    interimSumBidAmount: data[6].toString(),
    interimOrder: JSON.stringify(readableOrder(decodeOrder(data[7]))),
    clearingPriceOrder: JSON.stringify(readableOrder(decodeOrder(data[8]))),
    volumeClearingPriceOrder: data[9].toString(),
    minFundingThresholdNotReached: data[10],
    isAtomicClosureAllowed: data[11],
    feeNumerator: data[12].toString(),
    minFundingThreshold: data[13].toString(),
  }
}

export interface AuctionData {
  auctioningToken: string
  biddingToken: string
  orderCancellationEndDate: Date
  auctionEndDate: Date
  initialAuctionOrder: string //Order
  minimumBiddingAmountPerOrder: string
  interimSumBidAmount: string
  interimOrder: string
  clearingPriceOrder: string
  volumeClearingPriceOrder: string
  minFundingThresholdNotReached: boolean
  isAtomicClosureAllowed: boolean
  feeNumerator: string
  minFundingThreshold: string
}

// Example encoded data (the actual encoded data of initialAuctionOrder)
const encodedData = '0x...' // This should be the actual encoded data string

// ABI parameters corresponding to the structure of initialAuctionOrder
const abiParams = [
  { name: 'buyAmountOfInitialAuctionOrder', type: 'uint96' },
  { name: 'sellAmountOfInitialAuctionOrder', type: 'uint96' },
]

// Decoding the encoded data
// const [buyAmountOfInitialAuctionOrder, sellAmountOfInitialAuctionOrder] = decodeAbiParameters(abiParams, encodedData)

import BN from 'bn.js'
import { stringify } from 'viem'

interface Order {
  userId: BN
  buyAmount: BN
  sellAmount: BN
}

function encodeOrder({ userId, buyAmount, sellAmount }: Order): string {
  const userIdPadded = userId.toString(16, 16) // 64 bits, so 16 hex characters
  const buyAmountPadded = buyAmount.toString(16, 24) // 96 bits, so 24 hex characters
  const sellAmountPadded = sellAmount.toString(16, 24) // 96 bits, so 24 hex characters
  return `0x${userIdPadded}${buyAmountPadded}${sellAmountPadded}`
}

function decodeOrder(encodedOrder: string): Order {
  const userId = new BN(encodedOrder.substring(2, 18), 16)
  const buyAmount = new BN(encodedOrder.substring(18, 42), 16)
  const sellAmount = new BN(encodedOrder.substring(42, 66), 16)
  return { userId, buyAmount, sellAmount }
}

function readableOrder(order: Order) {
  const userId = order.userId.toString()
  const buyAmount = readableTokenQuantity(order.buyAmount, 'USDCred')
  const sellAmount = readableTokenQuantity(order.sellAmount, 'MBOTSPL')
  return { userId, buyAmount, sellAmount }
}

function readableTokenQuantity(quantity: BN | string | number, tokenSymbol: string) {
  const decimals = 6
  const divisor = new BN(10).pow(new BN(decimals))
  const quantityReadable = new BN(quantity).div(divisor)

  // Convert to string and append token symbol for human-readable format
  const humanReadableQuantity = `${quantityReadable.toString(10)} ${tokenSymbol}`
  return humanReadableQuantity
}
