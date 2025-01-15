export * from './types'
export * from './antelope'
export * from './evm'
export * from './solana'
export * from './cosmos'

import { antelopeChains } from './antelope'
// import { cosmosChains } from './cosmos'
import { evmChains } from './evm'
// import { solanaChains } from './solana'
import type { AnyChain, ChainType } from './types'

export const allChains: AnyChain[] = [
  ...antelopeChains.map((chain) => ({ ...chain, chainType: 'antelope' as ChainType })),
  ...evmChains.map((chain) => ({ ...chain, chainType: 'evm' as ChainType })),
  // ...solanaChains,
  // ...cosmosChains,
]
