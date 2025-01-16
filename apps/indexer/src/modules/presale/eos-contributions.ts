import { environment } from '@repo/config'
import { antelopeTokens } from '@repo/tokens'
import { tasks } from '@trigger.dev/sdk/v3'
import { stringify } from 'viem/utils'
import { createFirehoseSubscription } from '~/lib/dfuse-client'

// https://docs.dfuse.eosnation.io/platform/public-apis/search-query-language/
// https://docs.dfuse.eosnation.io/eosio/public-apis/reference/search/terms/
// receiver: means the account with code that has executed the action.
export async function listenToEosContributions(env: 'test' | 'prod' = 'test') {
  const usdt = antelopeTokens.find((token) => token.symbol === 'USDT')
  if (!usdt) throw new Error('USDT token not found')

  const bank = 'bank.bk'
  const launchpad = 'gaboesquivel'
  const usdtDeposits = await createFirehoseSubscription(
    `receiver:${bank} action:stbtransfer data.to:${launchpad}`,
  )
  const bitusdDeposits = await createFirehoseSubscription(
    `receiver:${usdt.address} action:transfer data.to:${launchpad}`,
  )

  // only first action for now
  usdtDeposits.on('data', ({ trxId, actions }: any) =>
    handleDeposit({
      trxId,
      from: actions[0].from,
      quantity: actions[0].quantity,
      to: actions[0].to,
    }),
  )
  bitusdDeposits.on('data', ({ trxId, actions }: any) =>
    handleDeposit({
      trxId,
      from: actions[0].from,
      quantity: actions[0].quantity.quantity,
      to: actions[0].to,
    }),
  )
}

async function handleDeposit(data: {
  trxId: string
  from: string
  quantity: string
  to: string
}) {
  const result = await tasks.trigger('eos-presale-deposit', data)
  console.info(
    `Triggered address activity event for webhook ${data.trxId}`,
    result,
  )
}
