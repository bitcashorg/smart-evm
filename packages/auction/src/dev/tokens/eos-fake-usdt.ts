import type { EOSTokenContractData } from '../../types'

export const EOSFakeUSDT: EOSTokenContractData = {
  address: 'bkbmocktoken',
  name: 'Fake EOS USDT',
  symbol: 'USDT',
  decimals: 4,
  indexFromBlock: 0,
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', // eos_evm
  chainType: 'antelope',
  chainName: 'EOS',
  abi: [] as const,
} as const
