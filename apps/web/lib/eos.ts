'use client'

import { tokens } from '@repo/tokens'
import { APIClient, Asset, Name } from '@wharfkit/antelope'
import {
  type AbiProvider,
  SigningRequest,
  type SigningRequestCreateArguments,
  type SigningRequestEncodingOptions,
} from 'eosio-signing-request'
import pako from 'pako'
import { v4 as uuidv4 } from 'uuid'
import { appConfig } from './config'

const eos = new APIClient({
  url: appConfig.eosRpc,
})

export const esrOptions: SigningRequestEncodingOptions = {
  abiProvider: {
    getAbi: async (account) => {
      const response = await eos.v1.chain.get_abi(account.toString())
      return response.abi
    },
  } as AbiProvider,
  zlib: pako,
}

export async function genLoginSigningRequest(uuid: string = uuidv4()) {
  const req = createSignatureRequest({
    action: {
      account: appConfig.bitcash.accounts,
      name: 'login',
      authorization,
      data: {
        account: '............1',
      },
    },
    info: {
      uuid,
      appName: 'Bitlauncher',
    },
  })
  console.log('esr', JSON.stringify((await req).data.toJSON()))

  return req
}

export async function genBitusdDepositSigningRequest(
  amount: number,
  to: string,
  info = {},
) {
  const req = createSignatureRequest({
    action: {
      account: appConfig.bitcash.bank,
      name: 'stbtransfer',
      authorization,
      data: {
        from: '............1',
        to,
        memo: 'pair_id:1', //address:${address}
        quantity: {
          quantity: Asset.from(amount, '2,BITUSD'),
          contract: appConfig.bitcash.token,
        },
      },
    },
    info: {
      uuid: uuidv4(),
      appName: 'Bitlauncher',
      edit: {
        memo: false,
        quantity: false,
      },
      ...info,
    },
  })
  return req
}

export async function genUsdtDepositSigningRequest(
  amount: number,
  to: string,
  info = {},
) {
  const account = tokens.find(
    (c) => c.chainType === 'antelope' && c.symbol === 'USDT',
  )?.address
  if (!account) throw new Error('usdt account not found')

  const req = createSignatureRequest({
    action: {
      account,
      name: 'transfer',
      authorization,
      data: {
        from: '............1',
        to,
        memo: 'presale deposit',
        quantity: Asset.from(amount, '4,USDT'),
      },
    },
    info: {
      uuid: uuidv4(),
      appName: 'Bitlauncher',
      edit: {
        memo: false,
        quantity: false,
      },
      ...info,
    },
  })
  return req
}

async function createSignatureRequest({
  info = {
    uuid: uuidv4(),
    appName: 'Bitlauncher',
  },
  action,
}: Pick<SigningRequestCreateArguments, 'info' | 'action'>) {
  return SigningRequest.create(
    {
      action,
      info,
      callback: {
        url: appConfig.esrCallbackUrl,
        background: true,
      },
    },
    esrOptions,
  )
}

const authorization = [
  {
    actor: '............1',
    permission: '............2',
  },
]

export async function getEosBalance(account: string) {
  const response = await eos.v1.chain.get_currency_balance('eosio.token', account, 'EOS')
  return response[0]?.value.toString() || '0'
}

export async function getBitUsdBalance(account: string) {
  const response = await eos.v1.chain.get_table_rows({
    code: appConfig.bitcash.bank,
    table: 'stablev2',
    scope: Name.from(account),
  })

  return (
    response.rows
      .find((row) => row.balance.quantity.includes('BITUSD'))
      ?.balance.quantity.replace('BITUSD', '') || 'O'
  )
}
