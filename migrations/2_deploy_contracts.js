const OwnableImplementation = artifacts.require("OwnableImplementation");
const RolesImplementation = artifacts.require("RolesImplementation");

module.exports = function(deployer) {
  deployer.deploy(OwnableImplementation);
  deployer.deploy(RolesImplementation);
};
