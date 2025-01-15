import { Alchemy, Network } from 'alchemy-sdk'
import { groupBy } from 'lodash'
import { appConfig } from '../src/config'

const settings = {
  authToken: appConfig.alchemyNotifyToken,
  network: Network.MATIC_MAINNET, // Adjust the network as needed
}

const alchemy = new Alchemy(settings)

async function logAllWebhooks() {
  try {
    const { webhooks } = await alchemy.notify.getAllWebhooks()

    const groupedWebhooks = groupBy(webhooks, 'url')
    console.log('Grouped Webhooks by URL:', groupedWebhooks)
    // console.log('All Webhooks:', webhooks)
  } catch (error) {
    console.error('Failed to fetch webhooks:', error)
  }
}

logAllWebhooks()
