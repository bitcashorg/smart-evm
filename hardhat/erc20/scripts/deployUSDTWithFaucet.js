const { ethers } = require('hardhat')

async function main() {
  const USDCredTokenWithFaucet = await ethers.getContractFactory(
    'USDTTokenWithFaucet',
  )
  const token = await USDCredTokenWithFaucet.deploy(
    ethers.utils.parseUnits('1000000', 6),
  )

  await token.deployed()

  console.log('USDTTokenWithFaucet deployed to:', token.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
