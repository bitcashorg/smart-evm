import { ConnectButton } from '@rainbow-me/rainbowkit'
import { FaucetForm } from './components/faucet-form'
import { Button } from './components/ui/button'
import { useUsdtBalance } from './hooks/use-usdt-balance'

export default function Component() {
  const balance = useUsdtBalance()
  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      <nav className="flex items-center justify-between p-6 bg-white shadow-md">
        <div className="flex items-center">
          <span className="text-xl font-semibold">bitlauncher Faucet</span>
        </div>
        <div className="flex">
          <div className="flex items-center justify-center h-10 pr-5 font-bold">
            USD Cred ${balance}
          </div>
          <ConnectButton />
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center py-12">
        <FaucetForm />

        <div className="gap-5 p-10 ">
          <a href="https://faucet.testnet.evm.eosnetwork.com/" target="blank">
            <Button>EOS EVM Testnet Faucet</Button>
          </a>
        </div>
      </main>
    </div>
  )
}
