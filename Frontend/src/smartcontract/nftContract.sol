// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NFTcontract {
    // State variable for address that deploys contract
    address payable public owner;

    constructor() {
        // When contract is deployed, assign owner variable the deployers address and make sure address is payable to receive funds.
        owner = payable(msg.sender);
    }

    modifier onlyOwner {
        // Modifier to prevent unauthorised addresses from withdrawing funds.
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    // Event to communicate a successful transaction
    event SaleExecuted(address buyer, uint price);

    // Buy function doesnt need parameters as we have set fixed price in database.
    function buyNFT() public payable {
        // Emits event when transaction is complete.
        emit SaleExecuted(msg.sender, msg.value);
    }

    // A way for the owner to check the balance of the escrow (contract)
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    // A way for the owner to receive funds from the contract.
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

