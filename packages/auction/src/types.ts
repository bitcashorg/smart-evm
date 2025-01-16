import type { Abi, Address } from 'viem'
import type { Chain } from 'viem'

export interface ContractData {
  abi: Abi
  address: Address | string
  chainId: number | string
  chainType: ChainType
  chainName: string
  indexFromBlock: number
}

export interface TokenContractData extends ContractData {
  name: string
  symbol: string
  decimals: number
  image?: string
}

export interface EVMContractData extends ContractData {
  address: Address
  chainId: number
  chain: Chain
}

export interface EVMTokenContractData extends TokenContractData {
  address: Address
  chainId: number
  chain: Chain
}

export interface EOSContractData extends ContractData {
  address: string
  chainId: string
}

export interface EOSTokenContractData extends TokenContractData {
  address: string
  chainId: string
}

export type ChainType = 'evm' | 'antelope' | 'eos' | 'solana'
