import crypto from 'node:crypto'
import { appConfig } from '@/lib/config'
import type {
  AlchemyActivityEvent,
  AlchemyNetwork,
  AlchemyWebhookEvent,
} from '@repo/alchemy'
import { chainIdAlchemyNetwork } from '@repo/alchemy'
import { evmChains } from '@repo/chains'
import { tasks } from '@trigger.dev/sdk/v3'
import { Alchemy, type Network } from 'alchemy-sdk'
import { NextResponse } from 'next/server'

const networks: AlchemyNetwork[] = evmChains
  .map((chain) => chainIdAlchemyNetwork[chain.id])
  .filter((network): network is AlchemyNetwork => network !== undefined)

export async function POST(req: Request) {
  const payload = await req.text()
  const evt = JSON.parse(payload) as AlchemyWebhookEvent
  const { network } = evt.event as AlchemyActivityEvent
  console.log('Webhook received', evt.id, evt.event.network, evt)

  if (!(await validateAlchemySignature(req, evt.webhookId, evt.event.network, payload)))
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  if (!isValidEvent(evt, network))
    return NextResponse.json({ error: 'Invalid event' }, { status: 400 })

  const result = await tasks.trigger('address-activity', evt)
  console.info(`Triggered address activity event for webhook ${evt.id}`, result)

  console.log('Webhook processed', evt.id, evt.event.network, evt)
  return NextResponse.json({ message: `Webhook ${evt.id} processed` }, { status: 200 })
}

function isValidEvent(evt: AlchemyWebhookEvent, network: AlchemyNetwork): boolean {
  const isAddressActivity = evt.type === 'ADDRESS_ACTIVITY'
  const isValidNetwork = networks.includes(network)
  if (!isAddressActivity || !isValidNetwork) {
    const errorMsg = !isAddressActivity
      ? `event type: ${evt.type}`
      : `network: ${network}`
    console.error(`Invalid: ${errorMsg}`)
    return false
  }
  return true
}

async function validateAlchemySignature(
  req: Request,
  webhookId: string,
  network: Network,
  payload: string,
): Promise<boolean> {
  const alchemySignature = req.headers.get('x-alchemy-signature')

  if (!alchemySignature) return false
  const settings = {
    authToken: appConfig.alchemy.notifyToken,
    network,
  }

  const alchemy = new Alchemy(settings)
  const { webhooks } = await alchemy.notify.getAllWebhooks()
  const signingKey = webhooks.find((webhook) => webhook.id === webhookId)?.signingKey
  if (!signingKey) {
    console.error(`Webhook ${webhookId} not found`)
    return false
  }

  const hmac = crypto.createHmac('sha256', signingKey)
  hmac.update(payload)
  return alchemySignature === hmac.digest('hex')
}
