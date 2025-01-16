import {
  http,
  type Address,
  ContractFunctionExecutionError,
  HttpRequestError,
  createWalletClient,
  erc20Abi,
  formatUnits,
  isAddress,
} from 'viem'

import { privateKeyToAccount } from 'viem/accounts'
import { z } from 'zod'
import { eosEvmMainnet, eosEvmTestnet } from '../../../../packages/chains'
import { appConfig } from '../config'
import { insertTransaction } from './supabase'

const envSchema = z.object({
  ISSUER_KEY: z
    .string()
    .length(64)
    .regex(/^[a-f0-9]+$/i, 'Invalid issuer key format'),
  ISSUER_ADDRESS: z
    .string()
    .refine(isAddress, 'Invalid issuer address')
    .transform((value) => value as Address),
})

/**
 * Issues presale tokens to a specified address.
 * @param to The address to receive the presale tokens
 * @param amount The amount of presale tokens to issue
 */
export async function issuePresaleTokens(
  to: Address,
  amount: bigint,
  tokenAddress: Address,
) {
  try {
    const parsedEnv = envSchema.safeParse(process.env)
    if (!parsedEnv.success)
      throw new Error(
        `Environment validation failed: ${parsedEnv.error.message}`,
      )

    const account = privateKeyToAccount(`0x${parsedEnv.data.ISSUER_KEY}`)

    const walletClient = createWalletClient({
      // key: parsedEnv.data.ISSUER_KEY,
      account,
      chain: appConfig.env === 'prod' ? eosEvmMainnet : eosEvmTestnet,
      transport: http(),
    })

    console.log(`Issuing ${formatUnits(amount, 6)} tokens to ${to}`, amount)

    const trxHash = await walletClient.writeContract({
      address: tokenAddress,
      abi: erc20Abi,
      functionName: 'transfer',
      args: [to, amount],
    })

    console.log(
      `Issued ${formatUnits(amount, 6)} tokens to ${to} on transaction ${trxHash}`,
      eosEvmMainnet,
    )

    const result = await insertTransaction({
      hash: trxHash,
      chain_id: (appConfig.env === 'prod'
        ? eosEvmMainnet.id
        : eosEvmTestnet.id
      ).toString(),
      chain_type: 'evm',
      trx_type: 'presale_token_issuance',
    })

    if (!result) throw new Error('Failed to insert transaction')

    return trxHash
  } catch (error) {
    console.log('===========================================')
    if (error instanceof ContractFunctionExecutionError) {
      console.error('Contract execution failed:', error.shortMessage)
      // Handle contract-specific errors
    } else if (error instanceof HttpRequestError) {
      console.error('Network request failed:', error.shortMessage)
      // Handle network-related errors
    } else {
      console.error('Unexpected error:')
    }
    console.error(error)
    console.log('===========================================')
    return null
  }
}
