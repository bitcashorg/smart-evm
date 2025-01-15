import type { EnvConfig } from '../types'

export const prod: EnvConfig = {
  supabase: {
    url: 'https://xixdelvapxmudvieqlis.supabase.co',
    anonKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpeGRlbHZhcHhtdWR2aWVxbGlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0NjMzNzAsImV4cCI6MjA0MTAzOTM3MH0.pxt5u1YKYZFl9mWEZm7CJornqI0UAbLjw-26juti5Yk',
  },
  chaingraph: {
    url: 'https://chaingraph-hasura-37160526315.us-central1.run.app/v1/graphql',
    key: process.env.CHAINGRAPH_API_KEY || '',
  },
  chains: [],
  esrCallbackUrl: 'https://bitlauncher.ai/api/esr',
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
