const { ethers } = require('hardhat')

async function main() {
  const BLPLToken = await ethers.getContractFactory('BLPLToken')
  const token = await BLPLToken.deploy(ethers.utils.parseUnits('400000', 18))

  await token.deployed()

  console.log('BLPLToken deployed to:', token.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
