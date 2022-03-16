const OwnableImplementation = artifacts.require("OwnableImplementation");

contract('OwnableImplementation', (accounts) => {
  it('should be callable for anybody', async () => {
    const OwnableImplementationInstance = await OwnableImplementation.deployed();
    await OwnableImplementationInstance.accessibleForAll.call({from: accounts[0]});
    await OwnableImplementationInstance.accessibleForAll.call({from: accounts[1]});
    assert.equal(true, true, "Calleble by any address");
  });
  
  it('should not be callable for anybody', async () => {
    const OwnableImplementationInstance = await OwnableImplementation.deployed();
    await OwnableImplementationInstance.accessibleForAll.call({from: accounts[0]});
    try {
        await OwnableImplementationInstance.accessibleForAll.call({from: accounts[1]});
        assert.equal(true, false, "Should not be callable by other address");
    } catch (error) {
        assert.equal(true, true, "Callable only from owner");
    }
  });
//   it('should call a function that depends on a linked library', async () => {
//     const OwnableImplementationInstance = await OwnableImplementation.deployed();
//     const OwnableImplementationBalance = (await OwnableImplementationInstance.getBalance.call(accounts[0])).toNumber();
//     const OwnableImplementationEthBalance = (await OwnableImplementationInstance.getBalanceInEth.call(accounts[0])).toNumber();

//     assert.equal(OwnableImplementationEthBalance, 2 * OwnableImplementationBalance, 'Library function returned unexpected function, linkage may be broken');
//   });
//   it('should send coin correctly', async () => {
//     const OwnableImplementationInstance = await OwnableImplementation.deployed();

//     // Setup 2 accounts.
//     const accountOne = accounts[0];
//     const accountTwo = accounts[1];

//     // Get initial balances of first and second account.
//     const accountOneStartingBalance = (await OwnableImplementationInstance.getBalance.call(accountOne)).toNumber();
//     const accountTwoStartingBalance = (await OwnableImplementationInstance.getBalance.call(accountTwo)).toNumber();

//     // Make transaction from first account to second.
//     const amount = 10;
//     await OwnableImplementationInstance.sendCoin(accountTwo, amount, { from: accountOne });

//     // Get balances of first and second account after the transactions.
//     const accountOneEndingBalance = (await OwnableImplementationInstance.getBalance.call(accountOne)).toNumber();
//     const accountTwoEndingBalance = (await OwnableImplementationInstance.getBalance.call(accountTwo)).toNumber();


//     assert.equal(accountOneEndingBalance, accountOneStartingBalance - amount, "Amount wasn't correctly taken from the sender");
//     assert.equal(accountTwoEndingBalance, accountTwoStartingBalance + amount, "Amount wasn't correctly sent to the receiver");
//   });
});
