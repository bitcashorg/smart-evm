import { Contract } from 'ethers'
import {
  type HardhatRuntimeEnvironment,
  type HttpNetworkConfig,
  NetworkConfig,
} from 'hardhat/types'

import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import weth9Networks from 'canonical-weth/networks.json'
import type { TypedDataDomain } from '../ts/ethers'

export function domain(
  chainId: number,
  verifyingContract: string,
): TypedDataDomain {
  return {
    name: 'AccessManager',
    version: 'v1',
    chainId,
    verifyingContract,
  }
}

export async function getEasyAuctionContract({
  ethers,
  deployments,
}: HardhatRuntimeEnvironment): Promise<Contract> {
  const authenticatorDeployment = await deployments.get('EasyAuction')

  const authenticator = new Contract(
    authenticatorDeployment.address,
    authenticatorDeployment.abi,
  ).connect(ethers.provider)

  return authenticator
}
export async function getAllowListOffChainManagedContract({
  ethers,
  deployments,
}: HardhatRuntimeEnvironment): Promise<Contract> {
  const authenticatorDeployment = await deployments.get(
    'AllowListOffChainManaged',
  )

  const authenticator = new Contract(
    authenticatorDeployment.address,
    authenticatorDeployment.abi,
  ).connect(ethers.provider)

  return authenticator
}

export async function getDepositAndPlaceOrderContract({
  ethers,
  deployments,
}: HardhatRuntimeEnvironment): Promise<Contract> {
  const depositAndPlaceOrderDeployment = await deployments.get(
    'DepositAndPlaceOrder',
  )

  const authenticator = new Contract(
    depositAndPlaceOrderDeployment.address,
    depositAndPlaceOrderDeployment.abi,
  ).connect(ethers.provider)

  return authenticator
}

export async function getWETH9Address(
  hre: HardhatRuntimeEnvironment,
): Promise<string> {
  // Todo: to be refactored...
  let weth9Address = ''
  const chainId = (await hre.ethers.provider.getNetwork()).chainId
  if (chainId == 4) {
    weth9Address = weth9Networks.WETH9['4']['address']
  } else if (chainId == 1) {
    weth9Address = weth9Networks.WETH9['1']['address']
  } else if (chainId == 137) {
    weth9Address = '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
  } else if (chainId == 56) {
    weth9Address = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  } else if (chainId == 100) {
    weth9Address = '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d'
  } else if (chainId == 5) {
    weth9Address = '0x60d4db9b534ef9260a88b0bed6c486fe13e604fc'
    // eosevm_testnet
  } else if (chainId == 15557) {
    weth9Address = '0x6ccc5ad199bf1c64b50f6e7dd530d71402402eb6' // WEOS
  }
  return weth9Address
}

export const isAvaxNetwork = (chainId: number): boolean =>
  chainId === 43113 || chainId === 43114

export const isEosEvmTestnetNetwork = (chainId: number): boolean =>
  chainId === 15557

export async function getNetworkName(
  hardhatRuntime: HardhatRuntimeEnvironment,
): Promise<string> {
  const networkInfo = await hardhatRuntime.ethers.provider.getNetwork()
  return networksMap[networkInfo.chainId.toString()] || networkInfo.name
}

const networksMap: NetworkMap = {
  '15557': 'eosevm_testnet',
}

type NetworkMap = {
  [key: string]: string
}

export async function getEhtersSigners(
  hardhatRuntime: HardhatRuntimeEnvironment,
) {
  let signers
  const networkName = await getNetworkName(hardhatRuntime)

  if (networkName === 'hardhat') {
    // For Hardhat Network
    signers = await hardhatRuntime.ethers.getSigners()
  } else {
    // For other networks like eosevm_network
    // Load private keys from environment or configuration
    const privateKey = process.env.PK // Example: load from environment
    if (!privateKey) {
      throw new Error('Private key not provided for non-Hardhat network')
    }
    // Retrieve the network configuration from Hardhat Runtime Environment
    const networkConfig = hardhatRuntime.network.config as HttpNetworkConfig
    const provider = new hardhatRuntime.ethers.providers.JsonRpcProvider(
      networkConfig.url,
    )
    const signer = new hardhatRuntime.ethers.Wallet(privateKey, provider)
    signers = [signer]
  }

  return signers
}
