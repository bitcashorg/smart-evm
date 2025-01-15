import { appErrors } from './catalog'
import type { AppErrorCode, ErrorWithMessage } from './types'
export * from './catalog'
export * from './types'

// Logs an application error, reports to Sentry and throws an AppError.
export function logAppErr(code: AppErrorCode, error: unknown) {
  console.error(`${code}: ${JSON.stringify(error)}`)
  // TODO: log error to Sentry
  return appErrors[code]
}

export function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  )
}

export function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError

  try {
    return new Error(JSON.stringify(maybeError))
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError))
  }
}

export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message
}
