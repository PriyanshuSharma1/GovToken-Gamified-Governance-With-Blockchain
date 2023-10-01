// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GovToken is ERC20 {
    address public owner;

    constructor() ERC20("GovToken", "GOV") {
        _mint(msg.sender, 1000000 * 10 ** uint256(decimals()));
        owner = msg.sender; // Set the contract owner during deployment
    }
 
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    // Function to allow the contract owner to send tokens to a recipient
    function sendTokens(address recipient, uint256 amount) public onlyOwner {
        require(recipient != address(0), "Invalid recipient address");
        require(amount > 0, "Amount must be greater than zero");
        _transfer(msg.sender, recipient, amount);
    }

    // Function to send tokens from the contract pool without sender connection
    function sendTokensFromPool(address recipient, uint256 amount) public onlyOwner {
        require(recipient != address(0), "Invalid recipient address");
        require(amount > 0, "Amount must be greater than zero");
        _transfer(address(this), recipient, amount);
    }

    // Add other functions and modifiers as needed
}
