// SPDX-License-Identifier: MIT
pragma solidity >= 0.7.0 < 0.9.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract RolesImplementation is AccessControl {
    bytes32 public constant ROLE_ADMIN = keccak256("ROLE_ADMIN");
    bytes32 public constant ROLE_USER = keccak256("ROLE_USER");

    constructor() {
        _grantRole(ROLE_ADMIN, msg.sender);
    }

    function justAdmin() public {
        require(hasRole(ROLE_ADMIN, msg.sender), "This function its only for ADMIN");
    }
    function justUser() public {
        require(hasRole(ROLE_USER, msg.sender), "This function its only for USER");
    }
    function addRole(bytes32 role, address account) public {
        require(hasRole(ROLE_ADMIN, msg.sender), "This function its only for ADMIN");
        _grantRole(role, account);
    }
    function addUserRole(address account) public {
        require(hasRole(ROLE_ADMIN, msg.sender), "This function its only for ADMIN");
        _grantRole(ROLE_USER, account);
    }
}