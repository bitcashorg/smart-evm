import { loadEnvConfig } from '@repo/config'
import { createClient as createWsClient } from 'graphql-ws'
import { createClient } from '../../generated'
import type { GraphQLSdkProps } from './client.types'

export * from '../../generated'

// Server side client
export function createChaingraphClient({
  config,
  options = {},
}: GraphQLSdkProps = {}) {
  const envConfig = loadEnvConfig(process.env.NEXT_PUBLIC_APP_ENV || 'prod')
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-chaingraph-api-key': envConfig.chaingraph.key,
  }

  let subscribe

  // * Guarding if webSocketImpl is in options
  if ('webSocketImpl' in options) {
    const { subscribe: subscriptions } = createWsClient({
      url: envConfig.chaingraph.url.replace('https', 'wss'),
      ...options,
      connectionParams: () => {
        return {
          headers,
        }
      },
    })
    subscribe = subscriptions
  }

  const client = createClient({
    fetcher: async (operation: any) => {
      //   console.log(
      //     '\n ==> GraphQL Query : \n',
      //     JSON.stringify((operation as GraphqlOperation).query.replaceAll('"', ''))
      //   )

      let fetchResponse
      try {
        fetchResponse = fetch(envConfig.chaingraph.url, {
          method: 'POST',
          headers,
          body: JSON.stringify(operation),
          ...config,
        }).then((response) => response.json())
      } catch (error) {
        console.error('Error in graphql fetcher', error)
      }

      return fetchResponse
    },
  })

  return {
    subscribe,
    ...client,
  }
}

/**
 * chaingraph-hasura-37160526315.us-central1.run.app,
 * auth.bitcash.org,
 * bitcash-auth-dev-ymrgicuyta-uc.a.run.app,
 * chaingraph-hasura-7y5keambwq-uc.a.run.app,
 * explorer.chaingraph.io,
 * graphiql-online.com,
 * graph.blockmatic.io,
 * localhost:3000,
 * localhost,
 * bitcash.org,
 * test.bitcash.org,
 * app.bitcash.org,
 * prev.bitcash.org
 */
