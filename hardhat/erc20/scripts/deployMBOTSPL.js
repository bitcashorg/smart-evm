const { ethers } = require('hardhat')

async function main() {
  const MBOTSPLToken = await ethers.getContractFactory('MBOTSPLToken')
  const token = await MBOTSPLToken.deploy(ethers.utils.parseUnits('1000000', 6))

  await token.deployed()

  console.log('MBOTSPLToken deployed to:', token.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
