import type { EVMTokenContractData } from '@repo/auction'
import { useSwitchChain } from 'wagmi'
import { Button } from './ui/button'

export function AddTokenToWallet({
  address,
  symbol,
  decimals,
  image,
  name,
  chainId,
}: EVMTokenContractData) {
  const { switchChain } = useSwitchChain()
  // console.log({ address, symbol, decimals, image, name })
  const addTokenToMetaMask = async () => {
    try {
      if (!window.ethereum && !window.ethereum.isMetaMask)
        alert('MetaMask is not installed')
      if (chainId) await switchChain({ chainId })
      await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address,
            symbol,
            decimals,
            image,
          },
        },
      })
      alert('Token added to MetaMask')
    } catch (error) {
      console.error('Error adding token to MetaMask', error)
      alert('Error adding token to MetaMask')
    }
  }

  return (
    <Button
      onClick={addTokenToMetaMask}
      className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring"
    >
      Add {name} to MetaMask
    </Button>
  )
}

interface CustomWindow extends Window {
  ethereum?: any
}

declare let window: CustomWindow
