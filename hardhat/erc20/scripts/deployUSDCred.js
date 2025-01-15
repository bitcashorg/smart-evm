const { ethers } = require('hardhat')

async function main() {
  const USDCredToken = await ethers.getContractFactory('USDCredToken')
  const token = await USDCredToken.deploy(ethers.utils.parseUnits('1000000', 6))

  await token.deployed()

  console.log('USDCredToken deployed to:', token.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
