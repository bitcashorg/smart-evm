export * from './tokens/eos-usdt'
export * from './tokens/eos-bitusd'
export * from './tokens/usdt'
export * from './tokens/usdc'

import type {
  ContractData,
  EOSTokenContractData,
  EVMTokenContractData,
} from '../types'
import { EOSBITUSD } from './tokens/eos-bitusd'
// import {usdcContracts} from './tokens/usdc'
import { EOSUSDT } from './tokens/eos-usdt'
import { usdtContracts } from './tokens/usdt'

const evmTokens: EVMTokenContractData[] = [
  ...usdtContracts,
  // ...usdcContracts
]

const eosTokens: EOSTokenContractData[] = [EOSUSDT, EOSBITUSD]

const auctions: ContractData[] = []

export const prodContracts = {
  tokens: {
    evm: evmTokens,
    eos: eosTokens,
  },
  auctions,
}
