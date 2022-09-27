//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Bottle {
    string private message;

    constructor(string memory _message) {
        console.log("Deploying a bottle with the message:", _message);
        message = _message;
    }

    function getMessage() public view returns (string memory) {
        console.log(
            "You read the message in the bottle, and it says: %s",
            message
        );
        return message;
    }

    function setMessage(string memory _message) public {
        console.log(
            "Replacing message in the bottle from '%s' to '%s'",
            message,
            _message
        );
        message = _message;
    }
}
