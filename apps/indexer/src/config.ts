import { environment } from '@repo/config'
import type { Account, Address } from 'viem'
import { isAddress } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { z } from 'zod'
import { logger } from './lib/logger'

const envSchema = z.object({
  SENTRY_DSN: z.string().min(1),
  DFUSE_API_KEY: z.string().min(1),
  TRIGGER_SECRET_KEY: z.string().min(1),
  SEPOLIA_RPC: z.string().url(),
  ISSUER_KEY: z
    .string()
    .min(1)
    .length(64)
    .regex(/^[a-f0-9]+$/i, 'Invalid issuer key format'),
  ISSUER_ADDRESS: z
    .string()
    .refine((value): value is Address => isAddress(value), 'Invalid issuer address'),
  PRESALE_ADDRESS: z
    .string()
    .refine((value): value is Address => isAddress(value), 'Invalid presale address'),

  ALCHEMY_ACTIVITY_SIGNING_KEY: z.string().min(1),
})

const parsedEnv = envSchema.safeParse(process.env)
if (!parsedEnv.success) {
  logger.error(
    `Environment validation failed: ${JSON.stringify(parsedEnv.error.format())}`,
  )
  process.exit(1)
}

export const appConfig = {
  presaleAddress: parsedEnv.data.PRESALE_ADDRESS,
  sentry: {
    dsn: parsedEnv.data.SENTRY_DSN,
  },
  eos: {
    dfuseKey: parsedEnv.data.DFUSE_API_KEY,
  },
  trigger: {
    secretKey: parsedEnv.data.TRIGGER_SECRET_KEY,
  },
  evm: {
    eosApi: 'https://api.testnet.evm.eosnetwork.com',
    sepoliaApi: parsedEnv.data.SEPOLIA_RPC,
    issuerKey: parsedEnv.data.ISSUER_KEY,
    issuerAddress: parsedEnv.data.ISSUER_ADDRESS as Address,
    issuerAccount: privateKeyToAccount(`0x${parsedEnv.data.ISSUER_KEY}`) as Account,
    alchemy: {
      activitySigningKey: parsedEnv.data.ALCHEMY_ACTIVITY_SIGNING_KEY,
    },
  },
  ...environment.test,
}
