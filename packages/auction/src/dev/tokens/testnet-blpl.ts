import { eosEvmTestnet } from '@smartsale/chains'
import { type Chain, erc20Abi } from 'viem'
import type { EVMTokenContractData } from '../../types'

export const TestnetBLPL: EVMTokenContractData = {
  address: '0x2BF8feebD09B2520E69f27294768774544c98985',
  name: 'Bitlauncher Prelaunch Token',
  symbol: 'BLPL',
  decimals: 18,
  indexFromBlock: 30051449,
  chainId: 15557, // eos_evm
  chainType: 'evm',
  chainName: 'EOS EVM Tesnet',
  chain: eosEvmTestnet as Chain,
  abi: erc20Abi,
} as const
