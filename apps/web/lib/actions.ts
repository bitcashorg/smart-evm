/**
 * Represents a standardized response structure for actions.
 * This pattern ensures:
 * 1. Consistency: A uniform structure for all action responses.
 * 2. Type safety: Type-checking for response data.
 * 3. Error handling: A field for user-friendly error messages.
 * 4. Flexibility: The generic type T accommodates various data structures.
 *
 * When success is true:
 * - info is required; error is null
 * When success is false:
 * - error is required and must contain a user-friendly error message
 *
 */

import { type AppError, type AppErrorCode, logAppErr } from '@repo/errors'

export type ActionResult<T> = Success<T> | Failure

export type Success<T> = { success: true; info: T; error: null }
export type Failure = { success: false; error: AppError; info: null }

export function success<T>(info: T): Success<T> {
  return { success: true, info, error: null }
}

export function failure(code: AppErrorCode, error: unknown): Failure {
  return { success: false, error: logAppErr(code, error), info: null }
}

// DEPRECATED: Use ActionResult instead as next-safe-action return type
export interface ActionResponse<T = unknown> {
  success: boolean
  message?: string
  data?: T
  error?: AppError
}
