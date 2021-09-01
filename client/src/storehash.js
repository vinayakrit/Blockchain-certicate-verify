
import web3 from './web3';

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0x5a77D865c6b52552F713F97f0599A5BC0728d178';
//use the ABI from your contract
const abi = [
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        }
      ],
      "name": "sendHash",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "hashToVerify",
          "type": "string"
        }
      ],
      "name": "verifyDocument",
      "outputs": [
        {
          "internalType": "bool",
          "name": "x",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
export default new web3.eth.Contract(abi, address);