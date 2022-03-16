// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/OwnableImplementation.sol";

contract TestOwnable {

  function testCallByAny() public {
    OwnableImplementation ownable = OwnableImplementation(DeployedAddresses.OwnableImplementation());

    Assert.equal(ownable.accessibleForAll(), "all good for all", "Should be calleble for anybody");
  }
}
