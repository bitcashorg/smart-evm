
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract USDCredToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("USD Credit Token", "USDCred") {
        _mint(msg.sender, initialSupply);
    }

    /**
     * @dev Issues a specific amount of tokens.
     * @param recipient The address to which the issued tokens will be sent.
     * @param amount The amount of tokens to be issued.
     */
    function issue(address recipient, uint256 amount) public onlyOwner {
        _mint(recipient, amount);
    }

    // use 6 decimals
    function decimals() public view virtual override returns (uint8) {
        return 6;
    }
}
