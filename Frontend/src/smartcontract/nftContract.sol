// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NFTcontract {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    event SaleExecuted(address buyer, uint price);

    function buyNFT() public payable {
        // You can add logic here to verify the correct amount, 
        
        
        // but since product details are off-chain, the backend needs to ensure correct values.
        emit SaleExecuted(msg.sender, msg.value);
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function withdrawFunds() public onlyOwner {
        require(address(this).balance > 0, "There are no funds to withdraw.");
        owner.transfer(address(this).balance);
    }
}

// 1. OPEN https://remix.ethereum.org/
// 2. CREATE NEW FILE NFTcontract.sol
// 3. PASTE THIS CODE
// 4. SELECT INJECTED PROVIDER (METAMASK)
// 5. COMPILE
// 6. DEPLOY
// 7. COPY CONTRACT ADDRESS
// 8. PASTE IN FRONTEND CODE
// 9. TEST
// 10. WITHDRAW FUNDS ON REMIX

