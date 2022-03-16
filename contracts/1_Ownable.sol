// SPDX-License-Identifier: MIT
pragma solidity >= 0.7.0 < 0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract OwnableImplementation is Ownable {
    function accessibleForAll() public pure  {
    }

    function onlyForOwner() public view onlyOwner  {
    }

}