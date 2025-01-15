import type { CosmosChain } from './types'

export const cosmosChains: CosmosChain[] = [
  {
    rpcUrl: 'https://rpc.cosmos.network:443',
    chainId: 'cosmoshub-4', // Cosmos mainnet chain ID
    name: 'Cosmos Hub',
    explorerUrl: 'https://cosmos.network',
  },
]
