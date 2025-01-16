import { erc20Abi } from 'viem'
import { arbitrum, avalanche, polygon, zkSync } from 'viem/chains'
import type { EVMTokenContractData } from '../../types'

export const usdcContracts: EVMTokenContractData[] = [
  {
    address: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
    name: 'USDC',
    symbol: 'USDC',
    decimals: 6,
    indexFromBlock: 1045000,
    chainId: 42161, // Arbitrum Mainnet
    chainType: 'evm',
    chainName: 'Arbitrum',
    abi: erc20Abi,
    chain: arbitrum,
  },
  {
    address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    name: 'USDC',
    symbol: 'USDC',
    decimals: 6,
    indexFromBlock: 48843700,
    chainId: 43114, // Avalanche Mainnet
    chainType: 'evm',
    chainName: 'Avalanche',
    abi: erc20Abi,
    chain: avalanche,
  },
  // TODO: this is throwing a backend error
  // {
  //   address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  //   name: "USDC",
  //   symbol: "USDC",
  //   decimals: 6,
  //   indexFromBlock: 1000000,
  //   chainId: 8453, // Base Mainnet
  //   chainType: "evm",
  //   chainName: "Base",
  //   abi: erc20Abi,
  //   chain: base,
  // },
  // TODO: celo times out
  // {
  //   address: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
  //   name: "USDC",
  //   symbol: "USDC",
  //   decimals: 6,
  //   indexFromBlock: 1000000,
  //   chainId: 42220, // Celo Mainnet
  //   chainType: "evm",
  //   chainName: "Celo",
  //   abi: erc20Abi,
  //   chain: celo,
  // },
  // TODO: this throws invalid params
  // {
  //   address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  //   name: "USDC",
  //   symbol: "USDC",
  //   decimals: 6,
  //   indexFromBlock: 20457027,
  //   chainId: 1, // Ethereum Mainnet
  //   chainType: "evm",
  //   chainName: "Ethereum",
  //   abi: erc20Abi,
  //   chain: mainnet,
  // },
  // TODO: 'Block range is too large',
  // {
  //   address: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
  //   name: "USDC",
  //   symbol: "USDC",
  //   decimals: 6,
  //   indexFromBlock: 12359955,
  //   chainId: 10, // OP Mainnet
  //   chainType: "evm",
  //   chainName: "Optimism",
  //   abi: erc20Abi,
  //   chain: optimism,
  // },
  {
    address: '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359',
    name: 'USDC',
    symbol: 'USDC',
    decimals: 6,
    indexFromBlock: 5000000,
    chainId: 137, // Polygon PoS Mainnet
    chainType: 'evm',
    chainName: 'Polygon',
    abi: erc20Abi,
    chain: polygon,
  },
  {
    address: '0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4',
    name: 'USDC',
    symbol: 'USDC',
    decimals: 6,
    indexFromBlock: 1000000,
    chainId: 324, // ZKsync Mainnet
    chainType: 'evm',
    chainName: 'ZKsync',
    abi: erc20Abi,
    chain: zkSync,
  },
]
