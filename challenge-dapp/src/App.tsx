// Bootstrap imports
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";

import { useState, useEffect } from "react";
import { ethers } from "ethers";

import Bottle from "./artifacts/contracts/Bottle.sol/Bottle.json";

declare global {
  interface Window {
    ethereum: any;
  }
}
window.ethereum = window.ethereum || {};

const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
function App() {
  // Property Variables

  const [message, setMessage] = useState(""); // Auxiliary variable to interact with the form
  const [currentMessage, setCurrentMessage] = useState(""); // Auxiliary variable to display to the user

  // Invoque initial read
  useEffect(() => {
    fetchMessage();
  }, []);

  // Helper Functions

  // Requests access to the user's Meta Mask Account
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // Fetches the current value store in greeting
  async function fetchMessage() {
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        greeterAddress,
        Bottle.abi,
        provider
      );
      try {
        // Call Bottle.getMessage()
        const data = await contract.getMessage();
        console.log("message: ", data);

        // Update display variable
        setCurrentMessage(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  // Sets the greeting from input text box
  async function replaceMessage() {
    if (!message) return;

    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Create contract with signer

      const contract = new ethers.Contract(greeterAddress, Bottle.abi, signer);
      const transaction = await contract.setMessage(message);

      setMessage("");
      await transaction.wait();
      fetchMessage();
    }
  }

  return (
    <>
      <div className="container mt-5">
        <div className="mt-5 mb-5">
          <Alert variant={"primary"}>
            <div>
              <h2>You found a decentralized bottle, and it has a message!</h2>
              <hr />
              <p style={{ overflowWrap: "break-word" }}>{currentMessage}</p>
            </div>
          </Alert>
        </div>

        <FloatingLabel
          controlId="floatingInput"
          label="Leave a new message in the bottle"
          className="mb-3"
        >
          <Form.Control
            type="greeting"
            placeholder="Your new message goes here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FloatingLabel>

        <div className="d-flex justify-content-center" style={{ gap: 10 }}>
          <Button onClick={fetchMessage}>Fetch message</Button>
          <Button onClick={replaceMessage} variant="success">Change message</Button>
        </div>
      </div>
    </>
  );
}

export default App;
