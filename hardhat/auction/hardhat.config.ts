import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-deploy'
import dotenv from 'dotenv'
import { utils } from 'ethers'
import type { HttpNetworkUserConfig } from 'hardhat/types'

import { clearAuction } from './src/tasks/clear_auction'
import { clearAuctionSimplified } from './src/tasks/clear_auction_simplifed'
import { generateSignatures } from './src/tasks/generateSignatures'
import { initiateAuction } from './src/tasks/initiate_new_auction'
import { placeManyOrders } from './src/tasks/placeManyOrders'

// Load environment variables.
dotenv.config()
const { MNEMONIC, PK } = process.env

const DEFAULT_MNEMONIC =
  'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat'

const sharedNetworkConfig: HttpNetworkUserConfig = {}
if (PK) {
  sharedNetworkConfig.accounts = [PK]
} else {
  sharedNetworkConfig.accounts = {
    mnemonic: MNEMONIC || DEFAULT_MNEMONIC,
  }
}

initiateAuction()
clearAuction()
clearAuctionSimplified()
generateSignatures()
placeManyOrders()

export default {
  paths: {
    artifacts: 'build/artifacts',
    cache: 'build/cache',
    deploy: 'src/deploy',
    sources: 'contracts',
  },
  solidity: {
    compilers: [
      {
        // used to compile WETH9.sol
        version: '0.5.5',
      },
      {
        version: '0.6.12',
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    },
  },
  networks: {
    hardhat: {
      accounts: {
        accountsBalance: '1000000000000000000000000000000',
      },
    },
    eosevm_testnet: {
      accounts: [PK],
      url: 'https://api.testnet.evm.eosnetwork.com',
      chainId: 15557,
    },
    eosevm_mainent: {
      accounts: [PK],
      url: 'https://api.evm.eosnetwork.com',
      chainId: 17777,
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  mocha: {
    timeout: 2000000,
  },
  // NOTE: remove this later, this is to verify and this may not work on eosevm explorer
  etherscan: {
    apiKey: {
      eosevm_testnet: 'not needed',
    },
    customChains: [
      {
        network: 'eosevm_testnet',
        chainId: 15557,
        urls: {
          apiURL: 'https://explorer.testnet.evm.eosnetwork.com/api',
          browserURL: 'https://explorer.testnet.evm.eosnetwork.com/',
        },
      },
    ],
  },
}
