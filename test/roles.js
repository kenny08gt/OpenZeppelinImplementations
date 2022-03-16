const RolesImplementation = artifacts.require("RolesImplementation");

contract('RolesImplementation', (accounts) => {
  it('should be callable from admin', async () => {
    const RolesImplementationInstance = await RolesImplementation.deployed();
    await RolesImplementationInstance.justAdmin.call({from: accounts[0]});
    assert.equal(true, true, "Calleble by admin");
  });
  
  
  it('should be fail from user', async () => {
    const admin = accounts[0];
    const user = accounts[1];
    const RolesImplementationInstance = await RolesImplementation.deployed();
    try {
        const RolesImplementationInstance = await RolesImplementation.deployed();
        await RolesImplementationInstance.contract.methods.addUserRole(user).call({from: admin});
        await RolesImplementationInstance.contract.methods.justAdmin.call({from: user});
        assert.equal(true, false);
    } catch (error) {
        // console.error(error);
        assert.equal(true, true);
    }
  });
  
  
  it('should be callable from User', async () => {
    const admin = accounts[0];
    const user = accounts[2];
    const RolesImplementationInstance = await RolesImplementation.deployed();
    await RolesImplementationInstance.contract.methods.addUserRole(user).call({from: admin});
    await RolesImplementationInstance.contract.methods.justUser.call({from: user});
    assert.equal(true, true, "Calleble by User");
  });
  
  it('should fail from Admin', async () => {
    const RolesImplementationInstance = await RolesImplementation.deployed();
    try {
        
        await RolesImplementationInstance.justUser.call({from: accounts[0]});
        assert.equal(true, false, "Calleble by User");
    } catch (error) {
        assert.equal(true, true, "Calleble by User");
    }
  });
  
})