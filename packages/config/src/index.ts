import { dev } from './env/dev'
import { prod } from './env/prod'
import { test } from './env/test'
import type { Env, EnvConfig } from './types'

export const environment: Record<Env, EnvConfig> = {
  prod,
  dev,
  test,
}

// Utility function to validate a string as a valid environment key
export function isValidEnv(env: string): env is Env {
  return Object.keys(environment).includes(env)
}

// Utility function that throws an error if the string is not a valid environment key, otherwise the environment config is returned
export function loadEnvConfig(env: string): EnvConfig {
  if (!isValidEnv(env)) throw new Error(`Invalid environment: ${env}`)
  return environment[env]
}
