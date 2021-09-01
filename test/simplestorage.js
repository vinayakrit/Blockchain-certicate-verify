const StoreHash = artifacts.require("./StoreHash.sol");

contract("StoreHash", accounts => {
  it("...should store the value 89.", async () => {
    const simpleStorageInstance = await StoreHash.deployed();

    // Set value of 89
    await simpleStorageInstance.set(89, { from: accounts[0] });

    // Get stored value
    const storedData = await simpleStorageInstance.get.call();

    assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});
