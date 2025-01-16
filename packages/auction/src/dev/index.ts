import type {
  ContractData,
  EOSTokenContractData,
  EVMTokenContractData,
} from '../types'
import { TestnetDepositOrder } from './auction/testnet-deposit-order'
import { TestnetEasyAuction } from './auction/testnet-easy-auction'
import { EOSFakeBITUSD } from './tokens/eos-fake-bitusd'
import { EOSFakeUSDT } from './tokens/eos-fake-usdt'
import { SepoliaUSDT } from './tokens/sepolia-usdt'
import { TestnetBLPL } from './tokens/testnet-blpl'
import { TestnetMBOTSPL } from './tokens/testnet-mbots-prelaunch'
import { TestnetUSDCred } from './tokens/testnet-usd-cred'
import { TestnetUSDT } from './tokens/testnet-usdt'

const evmTokens: EVMTokenContractData[] = [
  TestnetUSDCred,
  TestnetMBOTSPL,
  SepoliaUSDT,
  TestnetUSDT,
  TestnetBLPL,
]

const eosTokens: EOSTokenContractData[] = [EOSFakeBITUSD, EOSFakeUSDT]

const auctions: ContractData[] = [TestnetEasyAuction, TestnetDepositOrder]

export const devContracts = {
  tokens: {
    evm: evmTokens,
    eos: eosTokens,
  },
  auctions,
}

export * from './auction/testnet-easy-auction'
export * from './auction/testnet-deposit-order'
export * from './tokens/testnet-usd-cred'
export * from './tokens/testnet-mbots-prelaunch'
export * from './tokens/sepolia-usdt'
export * from './tokens/testnet-usdt'
export * from './tokens/eos-fake-bitusd'
export * from './tokens/eos-fake-usdt'
export * from './tokens/testnet-blpl'
