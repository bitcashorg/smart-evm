import type { Network } from 'alchemy-sdk'
import type { Address, Hex } from 'viem'

export interface AlchemyWebhookEvent {
  webhookId: string
  id: string
  createdAt: Date
  type: AlchemyWebhookType
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  event: Record<any, any>
}

export type AlchemyWebhookType =
  | 'MINED_TRANSACTION'
  | 'DROPPED_TRANSACTION'
  | 'ADDRESS_ACTIVITY'

export interface AlchemyActivity {
  fromAddress: Address
  toAddress: Address
  blockNum: string
  hash: string
  value: number
  asset: string
  category: string
  rawContract: {
    rawValue: Hex
    address: Address
    decimals: number
  }
  log?: {
    address: Address
    topics: Hex[]
    data: Hex
    blockNumber: Hex
    transactionHash: Hex
    transactionIndex: Hex
    blockHash: Hex
    logIndex: Hex
    removed: boolean
  }
}

export interface AlchemyActivityEvent {
  network: AlchemyNetwork
  activity: AlchemyActivity[]
}

export type AlchemyNetwork = keyof typeof Network
