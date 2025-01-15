import type { SolanaChain } from './types'

export const solanaChains: SolanaChain[] = [
  {
    network: 'mainnet-beta',
    name: 'Solana',
    rpcUrl: 'https://api.mainnet-beta.solana.com',
    explorerUrl: 'https://explorer.solana.com',
  },
  {
    network: 'devnet',
    name: 'Solana Devnet',
    rpcUrl: 'https://api.devnet.solana.com',
    explorerUrl: 'https://explorer.solana.com/network/devnet',
  },
]
