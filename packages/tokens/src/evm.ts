import { getAddress } from 'viem'
import type { EVMToken } from './types'

const baseTokens = [
  // {
  //   address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  //   chainId: 1,
  //   symbol: 'USDT',
  //   chainName: 'Ethereum',
  //   decimals: 6,
  // },
  {
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    chainId: 1,
    symbol: 'USDC',
    chainName: 'Ethereum',
    decimals: 6,
  },
  {
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    chainId: 137,
    symbol: 'USDT',
    chainName: 'Polygon',
    decimals: 6,
  },
  {
    address: '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359',
    chainId: 137,
    symbol: 'USDC',
    chainName: 'Polygon',
    decimals: 6,
  },
  {
    address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    chainId: 42161,
    symbol: 'USDT',
    chainName: 'Arbitrum',
    decimals: 6,
  },
  {
    address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    chainId: 42161,
    symbol: 'USDC',
    chainName: 'Arbitrum',
    decimals: 6,
  },
  {
    address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    chainId: 10,
    symbol: 'USDT',
    chainName: 'Optimism',
    decimals: 6,
  },
  {
    address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
    chainId: 10,
    symbol: 'USDC',
    chainName: 'Optimism',
    decimals: 6,
  },
  // {
  //   address: '0x',
  //   chainId: 8453,
  //   symbol: 'USDT',
  //   chainName: 'Base',
  // },
  {
    address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    chainId: 8453,
    symbol: 'USDC',
    chainName: 'Base',
    decimals: 6,
  },
  {
    address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
    chainId: 43114,
    symbol: 'USDT',
    chainName: 'Avalanche',
    decimals: 6,
  },
  {
    address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    chainId: 43114,
    symbol: 'USDC',
    chainName: 'Avalanche',
    decimals: 6,
  },
  {
    address: '0x55d398326f99059fF775485246999027B3197955',
    chainId: 56,
    symbol: 'USDT',
    chainName: 'BNB Chain',
    decimals: 18,
  },
  {
    address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    chainId: 56,
    symbol: 'USDC',
    chainName: 'BNB Chain',
    decimals: 18,
  },
]

export const evmTokens: EVMToken[] = baseTokens.map((token) => ({
  ...token,
  chainType: 'evm',
  isStable: true,
  address: getAddress(token.address),
}))
