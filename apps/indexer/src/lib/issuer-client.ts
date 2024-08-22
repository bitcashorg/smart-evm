import { eosEvmTestnet } from 'app-env'
import {
  http,
  PublicClient,
  createPublicClient,
  createWalletClient,
} from 'viem'
import { appConfig } from '../config'

export const walletClient = createWalletClient({
  chain: eosEvmTestnet,
  transport: http(),
  key: appConfig.evm.issuerKey,
  account: appConfig.evm.issuerAccount,
})

export async function getCurrentBlockHeight() {
  try {
    const client = createPublicClient({
      chain: eosEvmTestnet,
      transport: http(),
    })
    const blockNumber = await client.getBlockNumber()
    return blockNumber
  } catch (error) {
    console.error('Failed to fetch current block height:', error)
    throw error // Rethrow the error for handling upstream
  }
}
