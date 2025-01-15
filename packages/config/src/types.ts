import type { AnyChain } from '@repo/chains'
import type { Address } from 'viem'

// expiclit type to enforce it
export type Env = 'dev' | 'test' | 'prod'

export interface EnvConfig {
  chains: AnyChain[]
  esrCallbackUrl: string
  issuer: {
    eos: string
    evm: Address
  }
  bitcash: {
    bank: string
    token: string
    accounts: string
  }
  smartsale: {
    auction: Address
  }
  supabase: {
    url: string
    anonKey: string
  }
  chaingraph: {
    url: string
    key: string
  }
}
