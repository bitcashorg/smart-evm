# Hardhat Project

This project contains two contracts:

1. `USDCredTokenWithFaucet.sol` - USD Credit ERC20 token with a faucet, to be deployed on the eosevm_testnet.
2. `USDCredToken.sol` - USD Credit standard ERC20 token, to be deployed on the eosevm_mainnet.
3. `MBOTSPLToken.sol` - MBOTS Credit ERC20 token, to be deployed on the eosevm_testnet and eosevm_mainnet.

## Scripts

- `deployUSDCredWithFaucet.js` - Script to deploy the USDCredTokenWithFaucet contract on eosevm_testnet.
- `deployUSDCredWithoutFaucet.js` - Script to deploy the USDCredToken contract on eosevm_mainnet.
- `deployMBOTSPLTestnet.js` - Script to deploy the USDCredToken contract on eosevm_testnet.

## Network Configuration

Add your private key to a `.env` file in the root of the project for the deployments:

```
PK=<your-private-key>
```

## Usage

To deploy the contracts, run the corresponding package.json script

## Addresses

### EOS EVM Testnet

- USD Credit Token [0x1d5A4C37e60cAd0C72c057E3c191352429cDB38e](https://explorer.testnet.evm.eosnetwork.com/address/0x1d5A4C37e60cAd0C72c057E3c191352429cDB38e)
- MBOTS Prelaunch Token [0x357752b66961021524b44523cD90a8B3861803E5](https://explorer.testnet.evm.eosnetwork.com/address/0x357752b66961021524b44523cD90a8B3861803E5)
