import type { AntelopeChain } from './types'

export const antelopeChains: AntelopeChain[] = [
  {
    chainType: 'antelope',
    id: 'aca376f206b8fc25a6ed44dbdc66547cce914bab6a707060b5f7c8eac02ccb67',
    chainId: 'aca376f206b8fc25a6ed44dbdc66547cce914bab6a707060b5f7c8eac02ccb67', // Mainnet Chain ID
    // symbol: 'EOS',
    name: 'EOS Mainnet', // Name of the network
    rpcUrl: 'https://api.eosn.io',
    rpcUrls: { default: { http: ['https://api.eosn.io'] } },
    explorerUrl: 'https://bloks.io',
    blockExplorers: {
      default: {
        name: 'bloks',
        url: 'https://eos.bloks.io',
      },
    },
    // rpcEndpoints: [
    //   {
    //     protocol: 'https',
    //     host: 'api.eosn.io',
    //     port: 443,
    //   },
    //   {
    //     protocol: 'https',
    //     host: 'api.eosdetroit.io',
    //     port: 443,
    //   },
    // ],
  },
]
