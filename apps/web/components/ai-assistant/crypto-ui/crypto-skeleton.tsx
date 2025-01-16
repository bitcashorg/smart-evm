import React from 'react'

export function CryptoSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-8 w-full animate-pulse rounded-md bg-zinc-800" />
      <div className="relative -mx-4 cursor-col-resize">
        <div style={{ height: 146 }} />
      </div>
    </div>
  )
}
