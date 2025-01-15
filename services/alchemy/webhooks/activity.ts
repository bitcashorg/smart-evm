import { Alchemy, Network, WebhookType } from 'alchemy-sdk'
import { appConfig } from '../src/config'

async function createAddressActivityNotification({
  addresses,
  network,
}: { addresses: string[]; network: Network }) {
  console.log('🚀 createAddressActivityNotification', addresses, network)
  try {
    const settings = {
      authToken: appConfig.alchemyNotifyToken,
      network,
    }

    const alchemy = new Alchemy(settings)
    const addressActivityWebhook = await alchemy.notify.createWebhook(
      'https://bitlauncher.ai/api/activity',
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
const depositAddresses = [
  {
    deposit_address: '0x4122Dd5f83eeebD16f33Ce15730dea53e6eaC41d',
    chain_id: '1',
    network: Network.ETH_MAINNET,
  },
  {
    deposit_address: '0xf5355c2508E2FC9d0cF9c994B0C7ECf2a1121632',
    chain_id: '10',
    network: Network.OPT_MAINNET,
  },
  {
    deposit_address: '0x6dB76788459687A2716E27852E5783f822155278',
    chain_id: '42161',
    network: Network.ARB_MAINNET,
  },
  {
    deposit_address: '0xf5355c2508E2FC9d0cF9c994B0C7ECf2a1121632',
    chain_id: '8453',
    network: Network.BASE_MAINNET,
  },
  {
    deposit_address: '0x6dB76788459687A2716E27852E5783f822155278',
    chain_id: '56',
    network: Network.BNB_MAINNET,
  },
  {
    deposit_address: '0xf5355c2508E2FC9d0cF9c994B0C7ECf2a1121632',
    chain_id: '43114',
    network: Network.AVAX_MAINNET,
  },
  {
    deposit_address: '0x6dB76788459687A2716E27852E5783f822155278',
    chain_id: '137',
    network: Network.MATIC_MAINNET,
  },
]

for (const { deposit_address, network } of depositAddresses) {
  createAddressActivityNotification({
    addresses: [deposit_address],
    network,
  })
}
