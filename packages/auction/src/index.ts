import { devContracts } from './dev'
import { prodContracts } from './prod'

export * from './dev'
export * from './prod'
export * from './types'

export const appContracts = {
  dev: devContracts,
  prod: prodContracts,
}
