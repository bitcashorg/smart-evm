import { z } from 'zod'

const envSchema = z.object({
  ALCHEMY_NOTIFY_TOKEN: z.string().min(1, 'Alchemy notify token is required'),
})

const parsedEnv = envSchema.safeParse(process.env)
if (!parsedEnv.success) {
  console.error(
    `Environment validation failed: ${JSON.stringify(parsedEnv.error.format())}`,
  )
  process.exit(1)
}

export const appConfig = {
  alchemyNotifyToken: parsedEnv.data.ALCHEMY_NOTIFY_TOKEN,
}
