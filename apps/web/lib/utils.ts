import axios from 'axios'
import { type ClassValue, clsx } from 'clsx'
import type { MotionProps } from 'framer-motion'
import { customAlphabet } from 'nanoid'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleAxiosError(error: unknown) {
  if (axios.isAxiosError(error) && error.response) {
    return {
      data: error.response.data,
      status: error.response.status,
      headers: error.response.headers,
    }
  }
  console.error('An error occurred:', error)
  return {
    data: error as Error,
    status: (error as Error).name,
    headers: null,
  }
}

export function scrollToElement(element: HTMLElement | null) {
  if (!element) return
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })
}

const iconMotionProps: MotionProps & React.ComponentProps<'span'> = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: { duration: 0.3 },
  className: 'absolute inset-0 flex items-center justify-center self-center',
}

export const motionProps = {
  iconMotionProps,
}

export async function promiseAllWithConcurrencyLimit<T>(
  tasks: (() => Promise<T>)[],
  concurrencyLimit: number,
): Promise<T[]> {
  const results: T[] = new Array(tasks.length)
  const executing: Promise<void>[] = []

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i]

    const p = task().then((result) => {
      results[i] = result
    })

    executing.push(p)

    if (executing.length >= concurrencyLimit) {
      await Promise.race(executing)
      executing.splice(executing.indexOf(p), 1)
    }
  }

  await Promise.all(executing) // Wait for all remaining tasks to finish
  return results
}

export function formatCurrency({
  value,
  currencyCode = 'USD',
  locale = 'en-US',
}: FormatCurrencyParams): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })

  return formatter.format(Number(value))
}

type FormatCurrencyParams = {
  value: number | string
  currencyCode?: string
  locale?: string
}

export const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  7,
) // 7-character random string

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init)

  if (!res.ok) {
    const json = await res.json()
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number
      }
      error.status = res.status
      throw error
    }
    throw new Error('An unexpected error occurred')
  }

  return res.json()
}

export function formatDate(input: string | number | Date, length?: "long" | "numeric" | "2-digit" | "short" | "narrow"): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: length || 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export const formatNumber = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)

export const runAsyncFnWithoutBlocking = (
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  fn: (...args: any) => Promise<any>,
) => {
  fn()
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const getStringFromBuffer = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')

export enum ResultCode {
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidSubmission = 'INVALID_SUBMISSION',
  UserAlreadyExists = 'USER_ALREADY_EXISTS',
  UnknownError = 'UNKNOWN_ERROR',
  UserCreated = 'USER_CREATED',
  UserLoggedIn = 'USER_LOGGED_IN',
}

export const getMessageFromCode = (resultCode: string) => {
  switch (resultCode) {
    case ResultCode.InvalidCredentials:
      return 'Invalid credentials!'
    case ResultCode.InvalidSubmission:
      return 'Invalid submission, please try again!'
    case ResultCode.UserAlreadyExists:
      return 'User already exists, please log in!'
    case ResultCode.UserCreated:
      return 'User created, welcome!'
    case ResultCode.UnknownError:
      return 'Something went wrong, please try again!'
    case ResultCode.UserLoggedIn:
      return 'Logged in!'
  }
}

export function format(date: Date, formatString: string) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  return formatString
    .replace('yyyy', year.toString())
    .replace('yy', String(year).slice(-2))
    .replace('LLL', monthNames[month])
    .replace('MM', String(month + 1).padStart(2, '0'))
    .replace('dd', String(day).padStart(2, '0'))
    .replace('d', day.toString())
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds)
}

export function parseISO(dateString: string) {
  return new Date(dateString)
}

export function subMonths(date: Date, amount: number) {
  const newDate: Date = new Date(date)
  newDate.setMonth(newDate.getMonth() - amount)
  return newDate
}
