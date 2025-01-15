import type { EnvConfig } from '../types'

// pre production tests
export const test: EnvConfig = {
  chains: [],
  supabase: {
    url: 'https://mitkjznioyrucenuzsdb.supabase.co',
    anonKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdGtqem5pb3lydWNlbnV6c2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMzA3MzgsImV4cCI6MjAyODcwNjczOH0.uVdiJfaonQfWvL--71QFAdiXGMiN1SRYlYGLNiSuNC0',
  },
  chaingraph: {
    url: 'https://chaingraph-hasura-37160526315.us-central1.run.app/v1/graphql',
    key: process.env.CHAINGRAPH_API_KEY || '',
  },
  esrCallbackUrl: 'https://test.bitlauncher.ai/api/esr',
  issuer: {
    eos: 'launchpad.bk',
    evm: '0x',
  },
  bitcash: {
    bank: 'bank.bk',
    token: 'token.bk',
    accounts: 'accounts.bk',
  },
  smartsale: {
    auction: '0x',
  },
}
