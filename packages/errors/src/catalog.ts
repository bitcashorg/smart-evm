import type { AppError } from './types'

export const appErrors: Record<string, AppError> = {
  INVALID_INPUT: { code: 'INVALID_INPUT', message: 'Invalid input provided' },
  NETWORK_ERROR: { code: 'NETWORK_ERROR', message: 'A network error occurred' },
  INVALID_SIGNATURE: {
    code: 'INVALID_SIGNATURE',
    message: 'Invalid signature provided',
  },
  UNEXPECTED_ERROR: {
    code: 'UNEXPECTED_ERROR',
    message: 'An unexpected error occurred',
  },
  NOT_FOUND: {
    code: 'NOT_FOUND',
    message: 'The requested resource was not found',
  },
  UNAUTHORIZED: {
    code: 'UNAUTHORIZED',
    message: 'You are not authorized to perform this action',
  },
  FORBIDDEN: {
    code: 'FORBIDDEN',
    message: 'Access to this resource is forbidden',
  },
  SERVER_ERROR: {
    code: 'SERVER_ERROR',
    message: 'An internal server error occurred',
  },
  BAD_REQUEST: {
    code: 'BAD_REQUEST',
    message: 'The request was invalid or cannot be served',
  },
  FETCH_ERROR: {
    code: 'FETCH_ERROR',
    message: 'An error occurred while fetching data',
  },
  DB_OP_FAILURE: {
    code: 'DB_OP_FAILURE',
    message: 'Database operation failed',
  },
} as const
