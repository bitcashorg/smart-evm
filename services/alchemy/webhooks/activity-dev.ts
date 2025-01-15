import { Alchemy, Network, WebhookType } from 'alchemy-sdk'
import { appConfig } from '../src/config'

async function createAddressActivityNotification({
  addresses,
  network,
}: { addresses: string[]; network: Network }) {
  try {
    const settings = {
      authToken: appConfig.alchemyNotifyToken,
      network,
    }

    const alchemy = new Alchemy(settings)
    const addressActivityWebhook = await alchemy.notify.createWebhook(
      'https://0963-152-231-128-159.ngrok-free.app/api/activity',
      WebhookType.ADDRESS_ACTIVITY,
      {
        addresses,
        network,
      },
    )

    console.log('Address Activity Webhook Details:')
    console.log(JSON.stringify(addressActivityWebhook, null, 2))
  } catch (error) {
    console.error(
      'Failed to create address activity notification for network:',
      network,
      error,
    )
  }
}

createAddressActivityNotification({
  addresses: ['0x0b66FA29FE366194Ea684AD3fA6B92E992316DF5'],
  network: Network.MATIC_MAINNET,
})
