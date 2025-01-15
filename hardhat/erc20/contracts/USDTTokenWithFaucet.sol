
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDTTokenWithFaucet is ERC20 {
    constructor(uint256 initialSupply) ERC20("USDT (launchpad)", "USDT") {
        _mint(msg.sender, initialSupply);
    }

    // use 6 decimals
    function decimals() public view virtual override returns (uint8) {
        return 6;
    }

    // Faucet function to distribute tokens
    function faucet(address recipient, uint256 amount) public {
        _mint(recipient, amount);
    }
}
