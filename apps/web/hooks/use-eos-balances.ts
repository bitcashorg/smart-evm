import { getBitUsdBalance, getEosBalance } from '@/lib/eos'
import { useEffect } from 'react'
import { useSetState } from 'react-use'
import { useSession } from './use-session'

export function useEosBalances() {
  const { session } = useSession()
  const [state, setState] = useSetState({
    eos: '0',
    bitusd: '0',
    mbots: '0',
  })

  const getBalances = async (account: string) => {
    setState({
      eos: await getEosBalance(account),
      bitusd: await getBitUsdBalance(account),
    })
  }

  useEffect(() => {
    if (!session?.account) return
    const interval = setInterval(() => {
      if (!session?.account) {
        clearInterval(interval)
      } else {
        getBalances(session.account)
      }
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [session?.account])

  return state
}
