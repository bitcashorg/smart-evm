import type { Asset, ExtendedAsset, UInt64 } from '@wharfkit/antelope'
import type { order_by } from '../client'
export interface RequestAccountParams {
  referrer: string
  requestedName: string
  key: string
}

export interface Pair {
  id: UInt64
  crypto_token: ExtendedAsset
  stable_token: ExtendedAsset
  exchange_fee: Asset
  is_leverage_paused: boolean
  is_trading_paused: boolean
}

export type HistorySubscriptionFilterProps = {
  block_num: any
  account: string
  orderBy: order_by
}
