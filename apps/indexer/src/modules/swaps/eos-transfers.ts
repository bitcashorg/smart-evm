import { environment } from '@repo/config'
import { stringify } from 'viem/utils'
import { createFirehoseSubscription } from '~/lib/dfuse-client'
import { issueTokens } from './cred-issuer'

// https://docs.dfuse.eosnation.io/platform/public-apis/search-query-language/
// https://docs.dfuse.eosnation.io/eosio/public-apis/reference/search/terms/
// receiver: means the account with code that has executed the action.
export async function listenToEosTransfers(env: 'test' | 'prod' = 'test') {
  // TODO: restore
  // const usdt = environment[env].stables.find((t) => (t.chainType = 'antelope'))?.address
  // const bank = environment[env].bitcash.bank
  // const launchpad = environment[env].smartsale.bk
  // const usdtDeposits = await createFirehoseSubscription(
  //   `receiver:${bank} action:stbtransfer data.to:${launchpad}`,
  // )
  // const bitusdDeposits = await createFirehoseSubscription(
  //   `receiver:${usdt} action:transfer data.to:${launchpad}`,
  // )
  // // only first action for now
  // usdtDeposits.on('data', ({ trxId, actions }: any) =>
  //   handleDeposit({
  //     trxId,
  //     from: actions[0].from,
  //     quantity: actions[0].quantity,
  //   }),
  // )
  // bitusdDeposits.on('data', ({ trxId, actions }: any) =>
  //   handleDeposit({
  //     trxId,
  //     from: actions[0].from,
  //     quantity: actions[0].quantity.quantity,
  //   }),
  // )
}

async function handleDeposit(data: {
  trxId: string
  from: string
  quantity: string
}) {
  console.log('handle deposit', data)

  const response = await issueTokens(
    '0x7472312e4e1a373df751f84bd871a4c7a16128fa',
    BigInt(data.quantity),
  )
  console.log('tokens issued', stringify(response))
}
