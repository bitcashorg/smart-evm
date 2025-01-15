import { loadEnvConfig } from '@repo/config';
import { createChaingraphClient } from '../index';

const chaingraph = createChaingraphClient()
// ? use prod for query test only or change the env to prod (but everything becomes prod)
// const envConfig = loadEnvConfig('prod');
const envConfig = loadEnvConfig(process.env.NEXT_PUBLIC_APP_ENV || 'dev');

async function checkIfAccountIsRegistered(account: string) {
  const result = await chaingraph.query({
    table_rows: {
      __args: {
        where: {
          chain: {
            _eq: 'eos',
          },
          contract: {
            _eq: envConfig.bitcash.accounts,
          },
          table: {
            _eq: 'accountsv2',
          },
          primary_key: {
            _eq: account,
          },
        },
      },
      primary_key: true,
    },
  })
  return Boolean(result.table_rows.length)
}

async function checkAccountReferral(account: string) {
  try {
    const { table_rows } = await chaingraph.query({
      table_rows: {
        __args: {
          where: {
            chain: {
              _eq: 'eos',
            },
            contract: {
              _eq: envConfig.bitcash.accounts,
            },
            table: {
              _eq: 'accountsv2',
            },
            data: {
              _contains: {
                // ? Use 'andler.bk' or 'andlerdev.bk' for testing
                referrer: account
              }
            }
          },
        },
        data: true,
      },
    })
    if (!table_rows.length) {
      throw new Error('Bitcash account not found')
    }

    return {
      referrals: table_rows.map(row => row.data),
      error: null
    }
  } catch (error) {
    console.log('[ERROR] [checkAccountReferral]', error)
    return {
      error,
      referrals: null
    }
  }
}


export const chaingraphService = {
  checkIfAccountIsRegistered,
  checkAccountReferral,
}
