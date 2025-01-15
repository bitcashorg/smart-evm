import type { appErrors } from './catalog'

export interface AppError {
  code: string
  message: string
}

/**
 * Represents the possible error codes defined in the appErrors object.
 * This type ensures type safety when working with error codes.
 */
export type AppErrorCode = keyof typeof appErrors

// https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
export type ErrorWithMessage = {
  message: string
}
