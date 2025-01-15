import { TestnetUSDCred } from '@repo/auction'
import { eosEvmTestnet } from '@repo/chains'
import { createWalletClient } from 'viem'
import { http, type Address } from 'viem'
import { appConfig } from '~/config'

export async function issueTokens(to: Address, amount: bigint) {
  console.log('issueTokens', {
    args: [to, amount],
  })

  try {
    const walletClient = createWalletClient({
      chain: eosEvmTestnet,
      transport: http(),
      key: appConfig.evm.issuerKey,
      account: appConfig.evm.issuerAccount,
    })
    return walletClient.writeContract({
      address: TestnetUSDCred.address,
      abi: TestnetUSDCred.abi,
      functionName: 'issue',
      args: [to, amount],
      account: appConfig.evm.issuerAccount,
    })
  } catch (error) {
    console.log((error as Error).message)
    return null
  }
}
