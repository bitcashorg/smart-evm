import { useEffect, useState } from 'react'

const ENVIRONMENT = typeof window === 'undefined'

export function useMediaQuery(query: string) {
  const [result, setResult] = useState(false)

  useEffect(() => {
    if (ENVIRONMENT) {
      return
    }

    const mql = window.matchMedia(query)

    const handleChange = (event: MediaQueryListEvent) => {
      setResult(event.matches)
    }

    setResult(mql.matches)

    mql.addEventListener('change', handleChange)

    return () => {
      mql.removeEventListener('change', handleChange)
    }
  }, [query])

  return result
}
