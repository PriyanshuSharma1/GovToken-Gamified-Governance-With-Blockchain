import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './connectWallet.css'
import contractABI from "./contracts/ContractABI.json"

const YourComponent = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [contractData, setContractData] = useState(null);

  useEffect(() => {
    async function init() {
      try {
        // Initialize Web3.js
        if (window.ethereum) {
          const web3Instance = new Web3(window.ethereum);
          await window.ethereum.enable();
          setWeb3(web3Instance);
          
          // Load your smart contract
          const contractAddress = '0xcEE53Af07542425CA9a52543E9Fa37626EbD25c7';
          const contractAbi = contractABI; // Replace with your contract's ABI
          const contractInstance = new web3Instance.eth.Contract(contractAbi, contractAddress);
          setContract(contractInstance);
        } else {
          throw new Error('No web3 provider detected');
        }
      } catch (error) {
        console.error(error);
      }
    }

    init();
  }, []);

  const fetchDataFromContract = async () => {
    try {
      // Call a method from your smart contract
      console.log("random");
      let result = await contract.methods.balanceOf("0x6423921B42f7770E766FE31092a57377b95ADa9C").call();
      console.log(result);
      result = result/1000000000000000000n;
      setContractData(result.toString());
      console.log(typeof(result));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  return (
    <div className='center' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <h1>$GOV Tokens in My Wallet</h1>
      <button onClick={fetchDataFromContract}>Fetch Data from Contract</button>
      <div>
        <p>$GOV: {contractData}</p>
        <p>My Wallet Address: 0x6423921B42f7770E766FE31092a57377b95ADa9C</p>
      </div>
    </div>
  );
};

export default YourComponent;
