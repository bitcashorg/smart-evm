import React from 'react'

export function CryptosSkeleton() {
  return (
    <div className="mb-4 grid grid-cols-1 gap-2 overflow-y-auto pb-4 text-sm">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="flex w-full cursor-pointer flex-col items-stretch gap-2 rounded-lg bg-transparent p-2 text-left transition-colors hover:bg-neutral sm:flex-row sm:items-center"
        >
          <div className="flex w-full justify-center rounded-md bg-background/10 p-2 sm:w-11 sm:flex-shrink-0">
            <div className="h-6 w-6 animate-pulse rounded-full bg-background/20" />
          </div>
          <div className="flex flex-grow flex-col">
            <div className="h-4 w-16 animate-pulse rounded bg-background/20" />
            <div className="mt-1 h-4 w-24 animate-pulse rounded bg-background/20" />
          </div>
          <div className="flex flex-col items-end">
            <div className="h-4 w-12 animate-pulse rounded bg-background/20" />
            <div className="mt-1 h-4 w-16 animate-pulse rounded bg-background/20" />
          </div>
        </div>
      ))}
    </div>
  )
}
