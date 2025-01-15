import { listenToEosTransfers } from './eos-transfers'
import { listenToEvmTransfers } from './evm-transfers'

export function startSwapsService() {
  listenToEosTransfers()
  listenToEvmTransfers()
}
