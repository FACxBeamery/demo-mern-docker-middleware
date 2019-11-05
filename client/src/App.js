import React, {useEffect, useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function getMessage() {
      try {
        const response = await axios.get("/welcome");
        setMessage(response.data);
      } catch (err) {
        console.log(err)
      }
    }
    getMessage();
  }, [])
  useEffect(() => {
      async function sendData() {
          try {
              await axios.post("/data", "a string")
          } catch (err) {
              console.log(err);
          }
      }
      sendData();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {message}
      </header>
    </div>
  );
}

export default App;
