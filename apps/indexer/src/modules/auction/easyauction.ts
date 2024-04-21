import { getContract } from 'viem'
import { client } from '../../viem-client'
import { TestnetEasyAuction } from 'smartsale-contracts'

export const easyAuction = getContract({
  ...TestnetEasyAuction,
  client: {
    public: client,
  },
})
