import type { Address } from 'viem'
// import from @repo/config not working here
import { loadEnvConfig } from '../../../packages/config/src'

const validatedEnv = process.env.APP_ENV || 'dev'
export const appConfig = {
  env: validatedEnv,
  ...loadEnvConfig(validatedEnv),
} as const
