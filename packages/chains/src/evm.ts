import type { Chain } from 'viem'

import {
  arbitrum,
  avalanche,
  base,
  bsc,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'viem/chains'

export const eosEvmTestnet: Chain = {
  nativeCurrency: {
    name: 'EOS',
    symbol: 'EOS',
    decimals: 18,
  },
  id: 15557,
  name: 'EOS EVM Testnet',
  rpcUrls: {
    default: { http: ['https://api.testnet.evm.eosnetwork.com'] },
    public: { http: ['https://api.testnet.evm.eosnetwork.com'] },
  },
  blockExplorers: {
    default: {
      name: 'EOS EVM Testnet Explorer',
      url: 'https://explorer.testnet.evm.eosnetwork.com',
    },
  },
  testnet: true,
  fees: undefined,
}

export const eosEvmMainnet: Chain = {
  nativeCurrency: {
    name: 'EOS',
    symbol: 'EOS',
    decimals: 18,
  },
  id: 17777,
  name: 'EOS EVM Mainnet',
  rpcUrls: {
    default: { http: ['https://api.evm.eosnetwork.com'] },
    public: { http: ['https://api.evm.eosnetwork.com'] },
  },
  blockExplorers: {
    default: {
      name: 'EOS EVM Mainnet Explorer',
      url: 'https://explorer.evm.eosnetwork.com',
    },
  },
}

export const evmChains: Chain[] = [
  base,
  arbitrum,
  optimism,
  polygon,
  mainnet, // Ethereum
  avalanche,
  bsc, // BNB Chain
  eosEvmTestnet,
  sepolia,
]

export function createEvmChainMapFromId(items: Chain[]): Map<number, Chain> {
  const mapFromId = new Map<number, Chain>()

  for (const item of items) {
    mapFromId.set(item.id, item)
  }

  return mapFromId
}
