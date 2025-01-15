import type { SolanaToken } from './types'

const baseTokens = [
  {
    symbol: 'USDC',
    address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  },
  {
    symbol: 'USDT',
    address: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
  },
]

export const solanaTokens: SolanaToken[] = []
// baseTokens.map((token) => ({
//   ...token,
//   decimals: 6,
//   image: `https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/${token.address}/logo.png`,
//   chainName: 'Solana',
//   isStable: true,
//   chainId: 'solana-mainnet',
//   chainType: 'solana' as const,
// }))
