import { listenToEosContributions } from './eos-contributions'

export function startPresaleService() {
  console.log('starting presale service')
  listenToEosContributions()
}
