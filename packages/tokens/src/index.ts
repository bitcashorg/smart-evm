import type { Token } from './types'
export * from './types'
export * from './antelope'
export * from './evm'
export * from './solana'

import { antelopeTokens } from './antelope'
import { evmTokens } from './evm'
import { solanaTokens } from './solana'

export const tokens: Token[] = [...antelopeTokens, ...evmTokens, ...solanaTokens]
