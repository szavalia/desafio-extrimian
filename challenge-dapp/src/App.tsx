import "./App.css";
// Bootstrap imports
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { ethers } from "ethers";

import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";


declare global{
  interface Window {ethereum: any; }
}
window.ethereum = window.ethereum || {};



const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
function App() {
  // Property Variables

  const [message, setMessage] = useState("");
  const [currentGreeting, setCurrentGreeting] = useState("");

  // Helper Functions

  // Requests access to the user's Meta Mask Account
  // https://metamask.io/
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // Fetches the current value store in greeting
  async function fetchGreeting() {
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        greeterAddress,
        Greeter.abi,
        provider
      );
      console.log("Contract: ",contract);
      try {
        // Call Greeter.greet() and display current greeting in `console`
        /* 
          function greet() public view returns (string memory) {
            return greeting;
          }
        */
        const data = await contract.greet();
        console.log("data: ", data);
        setCurrentGreeting(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  // Sets the greeting from input text box
  async function setGreeting() {
    if (!message) return;

    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Create contract with signer
      /*
        function setGreeting(string memory _greeting) public {
          console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
          greeting = _greeting;
        } 
      */
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(message);

      setMessage("");
      await transaction.wait();
      fetchGreeting();
    }
  }

  return (
    <>
      <div className="container mt-5">
        <FloatingLabel
          controlId="floatingInput"
          label="Greeting"
          className="mb-3"
        >
          <Form.Control type="greeting" placeholder="Your greeting here" value={message} onChange={(e) => setMessage(e.target.value)}/>
        </FloatingLabel>

      <div className="d-flex justify-content-center" style={{gap: 10}}>
        <Button onClick={fetchGreeting}>Fetch Greeting</Button>
        <Button onClick={setGreeting}>Set Greeting</Button>  
      </div>
      
      </div>
    </>
  );
}

export default App;
