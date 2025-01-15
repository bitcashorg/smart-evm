import { sepolia } from 'viem/chains'
import type { EVMContractData } from '../../types'

export const TestnetAllowList: EVMContractData = {
  address: '0x3D18904711fe451356eBA461B7747EA3Abff6c93',
  indexFromBlock: 12241046,
  chainId: 15557,
  chainType: 'evm',
  chainName: 'Sepolia',
  chain: sepolia,
  abi: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'domainSeparator',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'auctionId',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'callData',
          type: 'bytes',
        },
      ],
      name: 'isAllowed',
      outputs: [
        {
          internalType: 'bytes4',
          name: '',
          type: 'bytes4',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'auctionId',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'allower',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'callData',
          type: 'bytes',
        },
      ],
      name: 'isAllowedBy',
      outputs: [
        {
          internalType: 'bytes4',
          name: '',
          type: 'bytes4',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
}
