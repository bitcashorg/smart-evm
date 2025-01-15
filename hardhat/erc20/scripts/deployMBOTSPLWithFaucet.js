const { ethers } = require('hardhat')

async function main() {
  const MBOTSPLTokenWithFaucet = await ethers.getContractFactory('MBOTSPLTokenWithFaucet')
  const token = await MBOTSPLTokenWithFaucet.deploy(ethers.utils.parseUnits('1000000', 6))

  await token.deployed()

  console.log('MBOTSPLTokenWithFaucet deployed to:', token.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
