import type { EOSTokenContractData } from '../../types'

export const EOSBITUSD: EOSTokenContractData = {
  address: 'bkbtokentest',
  name: 'BITUSD',
  symbol: 'BITUSD',
  decimals: 2,
  indexFromBlock: 0,
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', // eos_evm
  chainType: 'antelope',
  chainName: 'EOS',
  abi: [] as const,
} as const
