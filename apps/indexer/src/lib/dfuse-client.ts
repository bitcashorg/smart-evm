import EventEmitter from 'node:events'
import type { IncomingMessage } from 'node:http'
import {
  type GraphqlStreamMessage,
  type WebSocketFactory,
  createDfuseClient,
} from '@dfuse/client'
import nodeFetch from 'node-fetch'
import WebSocketClient from 'ws'
import { appConfig } from '~/config'

export const dfuse = createDfuseClient({
  apiKey: appConfig.eos.dfuseKey,
  network: 'eos.dfuse.eosnation.io',
  // authentication: true,
  httpClientOptions: {
    fetch: nodeFetch,
  },
  graphqlStreamClientOptions: {
    socketOptions: {
      // @ts-ignore
      webSocketFactory: (url) => webSocketFactory(url, ['graphql-ws']),
    },
  },
  streamClientOptions: {
    socketOptions: {
      // @ts-ignore
      webSocketFactory,
    },
  },
})

export async function createFirehoseSubscription(query: string) {
  const eventEmitter = new EventEmitter()

  console.log('createFirehoseSubscription query:', query)
  const streamTransfers: string = `subscription {
    searchTransactionsForward(query: "${query}") {
      undo cursor
      trace {
        id
        matchingActions {
          json
        }
      }
    }
  }`

  const stream = await dfuse.graphql(
    streamTransfers,
    (message: GraphqlStreamMessage<any>) => {
      if (message.type === 'data') {
        const transfer = message.data.searchTransactionsForward.trace
        const data = {
          trxId: transfer.id as string,
          actions: transfer.matchingActions.map(({ json }: any) => json) as {}[],
        }
        eventEmitter.emit('data', data)
        console.log('Token Transfer:', JSON.stringify(data))
      }

      if (message.type === 'error') {
        console.error('An error occurred:', message.errors, message.terminal)
      }

      if (message.type === 'complete') {
        console.log('Stream completed')
      }
    },
  )

  return { on: eventEmitter.on, stream }
}

async function webSocketFactory(
  url: string,
  protocols: string[] = [],
): Promise<WebSocketFactory> {
  const webSocket = new WebSocketClient(url, protocols, {
    handshakeTimeout: 30 * 1000, // 30s
    maxPayload: 100 * 1024 * 100, // 100Mb
  })
  const onUpgrade = (response: IncomingMessage) => {
    // Removing the listener at this point since this factory
    // is called at each reconnection with the remote endpoint!
    webSocket.removeListener('upgrade', onUpgrade)
  }

  webSocket.on('upgrade', onUpgrade)

  // @ts-ignore
  return webSocket
}
// necessary for dfuse client to work
;(global as any).fetch = nodeFetch
;(global as any).WebSocket = WebSocketClient
