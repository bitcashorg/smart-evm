import type { EnvConfig } from '../types'

export const dev: EnvConfig = {
  // esrCallbackUrl: 'https://dev.bitlauncher.ai/api/esr',
  esrCallbackUrl: 'https://dev.bitlauncher.ai/api/esr',
  chains: [],
  issuer: {
    eos: 'gaboesquivel',
    evm: '0x',
  },
  // bitcash: {
  //   bank: 'bkbbanktest3',
  //   token: 'bkbtokentest',
  //   accounts: 'bkbaccountst',
  // },
  bitcash: {
    bank: 'bank.bk',
    token: 'token.bk',
    accounts: 'accounts.bk',
  },
  smartsale: {
    auction: '0x',
  },
  supabase: {
    url: 'https://jvpdyxpjpodxsuvhufpw.supabase.co',
    anonKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2cGR5eHBqcG9keHN1dmh1ZnB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMzMxMDcsImV4cCI6MjAyODcwOTEwN30.KkwK6Px8MG03QPDScsKjLc48GU-RkTs9beT946vD2vI',
  },
  chaingraph: {
    url: 'https://chaingraph-hasura-37160526315.us-central1.run.app/v1/graphql',
    key: process.env.CHAINGRAPH_API_KEY || '',
  },
}
