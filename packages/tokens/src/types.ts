import type { ChainType } from '@repo/chains'
import type { Address } from 'viem'

export interface BaseToken {
  symbol: string
  chainName: string
  image?: string
  decimals: number
  isStable: boolean
  chainType: ChainType
}

export interface EVMToken extends BaseToken {
  address: Address
  chainId: number
  chainType: 'evm'
}

export interface AntelopeToken extends BaseToken {
  address: string
  chainId: string
  chainType: 'antelope'
}

export interface SolanaToken extends BaseToken {
  address: string // Solana uses public key as address
  chainType: 'solana'
  chainId: string
}

export interface CosmosToken extends BaseToken {
  denom: string // Cosmos uses denom instead of address
  chainId: string
  chainType: 'cosmos'
  address: null
}

export type Token = EVMToken | AntelopeToken | SolanaToken | CosmosToken
