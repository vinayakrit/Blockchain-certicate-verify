pragma solidity >=0.4.21 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/StoreHash.sol";

contract TestSimpleStorage {

  function testItStoresAValue() public {
    StoreHash simpleStorage = StoreHash(DeployedAddresses.StoreHash());

    simpleStorage.set(89);

    uint expected = 89;

    Assert.equal(simpleStorage.get(), expected, "It should store the value 89.");
  }

}
