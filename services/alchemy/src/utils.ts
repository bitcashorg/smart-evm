import type { AlchemyNetwork } from './types'

// Mapping of chain IDs to Alchemy SDK Network types
export const chainIdAlchemyNetwork: Record<number, AlchemyNetwork> = {
  1: 'ETH_MAINNET',
  137: 'MATIC_MAINNET',
  42161: 'ARB_MAINNET',
  10: 'OPT_MAINNET',
  8453: 'BASE_MAINNET',
  43114: 'AVAX_MAINNET',
  56: 'BNB_MAINNET',
}
