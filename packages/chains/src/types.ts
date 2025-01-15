import type { Chain as ViemChain } from 'viem'

export type ChainType = 'evm' | 'antelope' | 'solana' | 'cosmos'
export type EVMChain = ViemChain & { chainType: ChainType }

// NOTE: work in progress to support all chains
export type AnyChain = EVMChain | AntelopeChain

export type SolanaChain = {
  network: string
  name: string
  rpcUrl: string
  explorerUrl: string
}

export type CosmosChain = {
  chainId: string
  name: string
  rpcUrl: string
  explorerUrl: string
}

export interface AntelopeChain {
  chainType: ChainType
  id: string
  chainId: string
  name: string
  rpcUrl: string
  explorerUrl: string
  rpcUrls: {
    [key: string]: ChainRpcUrls
    default: ChainRpcUrls
  }
  blockExplorers?:
    | {
        [key: string]: ChainBlockExplorer
        default: ChainBlockExplorer
      }
    | undefined
}

type ChainRpcUrls = {
  http: readonly string[]
  webSocket?: readonly string[] | undefined
}

type ChainBlockExplorer = {
  name: string
  url: string
  apiUrl?: string | undefined
}
