// SimpleStorage.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedData;

    // Set a new value
    function set(uint256 x) public {
        storedData = x;
    }

    // Get the current value
    function get() public view returns (uint256) {
        return storedData;
    }
}
