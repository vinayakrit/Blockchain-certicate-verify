// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

//0xb84b12e953f5bcf01b05f926728e855f2d4a67a9  contract address on rinkeby
//deployed using remix 

contract StoreHash {
 string ipfsHash;
 mapping(uint => string) documents;

 
 function sendHash(uint256 id, string  memory ipfsHash)  public
{
    documents[id] = ipfsHash;
}

function verifyDocument(uint256 id, string memory hashToVerify) view public returns (bool)
 {
    if(keccak256(abi.encodePacked(documents[id])) == keccak256(abi.encodePacked(hashToVerify )) )
    {
        return true;
    }
    else
    {
        return false;
    }
 }
}

