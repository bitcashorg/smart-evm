const { ethers } = require('hardhat')

async function main() {
  const USDCredTokenWithFaucet = await ethers.getContractFactory(
    'USDCredTokenWithFaucet',
  )
  const token = await USDCredTokenWithFaucet.deploy(
    ethers.utils.parseUnits('1000000', 6),
  )

  await token.deployed()

  console.log('USDCredTokenWithFaucet deployed to:', token.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
