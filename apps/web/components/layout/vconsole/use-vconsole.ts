'use client'

import { appConfig } from '@/lib/config'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import VConsole from 'vconsole'

// NOTE: this approach doesnt catch initial render
export function useVConsole() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Read 'debug' parameter from searchParams, defaulting to 'false' if not present
    const debugQueryParam = searchParams.get('debug') === 'true'

    // Store the debug value in localStorage
    localStorage.setItem('debug', debugQueryParam.toString())

    // Retrieve the debug value from localStorage
    const debugLocalStorage = localStorage.getItem('debug') === 'true'

    // Include the retrieved debug value in the if clause
    if (debugLocalStorage) {
      const vconsole = new VConsole({ theme: 'dark' })

      console.info('🙇‍♂️ vConsole initialized', vconsole)
    }
  }, [searchParams])
}
