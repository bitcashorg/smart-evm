import axios from 'axios'
import { type ClassValue, clsx } from 'clsx'
import type { MotionProps } from 'framer-motion'
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
  } else {
    console.error('An error occurred:', error)
    return {
      data: error as Error,
      status: (error as Error).name,
      headers: null,
    }
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
