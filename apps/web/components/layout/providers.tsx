'use client'

import { MobileNavProvider } from '@/hooks/use-mobile-navigation'
import { SessionProvider } from '@/hooks/use-session'
import { UseSigningRequestProvider } from '@/hooks/use-signing-request'
import { appConfig } from '@/lib/config'
import multibase, { MultibaseProvider } from '@multibase/js'
import {
  RainbowKitProvider,
  type Theme,
  getDefaultConfig,
  lightTheme,
} from '@rainbow-me/rainbowkit'
import type { _chains } from '@rainbow-me/rainbowkit/dist/config/getDefaultConfig'
import {
  metaMaskWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { eosEvmMainnet, eosEvmTestnet } from '@repo/chains'
import { TooltipProvider } from '@repo/ui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { merge } from 'lodash'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { WagmiProvider } from 'wagmi'
import {
  arbitrum,
  avalanche,
  base,
  bsc,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains'

const queryClient = new QueryClient()

const prodChains: _chains = [
  arbitrum,
  avalanche,
  base,
  mainnet,
  optimism,
  polygon,
  bsc,
  { ...eosEvmMainnet, fees: undefined },
]
const devChains: _chains = [{ ...eosEvmTestnet, fees: undefined }, sepolia]

export const wagmiConfig = getDefaultConfig({
  appName: 'Bitlauncher',
  projectId: '25a868c834c1003aa0f0b69aba0ae056',
  wallets: [
    {
      groupName: 'Popular',
      wallets: [metaMaskWallet, trustWallet, walletConnectWallet],
    },
  ],
  chains: [...prodChains, ...devChains],
})

const customRainbowKitTheme = merge(lightTheme(), {
  colors: {
    connectButtonBackground: '#fff',
    connectButtonInnerBackground: '#fff',
    connectButtonText: '#000',
  },
  radii: {
    actionButton: '9999px', // Custom radius for action buttons,
    connectButton: '9999px', // Custom radius for action buttons
  },
  // fonts: {
  //   body: '...'
  // }
} as Theme)

if (typeof window !== 'undefined') {
  const multibaseKey = appConfig.analytics.multibase.key

  if (!multibaseKey) {
    console.error('Missing MULTIBASE_API_KEY')
  } else {
    multibase.init(multibaseKey)
    console.info('Multibase Initialized')
  }
}

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <NuqsAdapter>
        <TooltipProvider>
          <QueryClientProvider client={queryClient}>
            <WagmiProvider config={wagmiConfig}>
              <RainbowKitProvider
                theme={customRainbowKitTheme}
                modalSize="compact"
                showRecentTransactions={true}
                appInfo={{
                  appName: 'Bitlauncher',
                }}
              >
                <MultibaseProvider client={multibase}>
                  <SessionProvider>
                    <UseSigningRequestProvider>
                      <MobileNavProvider>{children}</MobileNavProvider>
                    </UseSigningRequestProvider>
                  </SessionProvider>
                </MultibaseProvider>
              </RainbowKitProvider>
            </WagmiProvider>
          </QueryClientProvider>
        </TooltipProvider>
      </NuqsAdapter>
    </NextThemesProvider>
  )
}
