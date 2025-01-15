import { TestnetEasyAuction } from '@repo/auction'
import { eosEvmTestnet } from '@repo/chains'
import { http, createPublicClient, getContract } from 'viem'

const client = createPublicClient({
  chain: eosEvmTestnet,
  transport: http(),
})

export const easyAuction = getContract({
  ...TestnetEasyAuction,
  client: {
    public: client,
  },
})
