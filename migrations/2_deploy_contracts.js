const OwnableImplementation = artifacts.require("OwnableImplementation");

module.exports = function(deployer) {
  deployer.deploy(OwnableImplementation);
};
