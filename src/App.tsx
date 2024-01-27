import React, { useState, useEffect } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [message, setMessage] = useState("");
  const [starting, setStarting] = useState("");
  const [ending, setEnding] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  const handleStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStarting(event.target.value);
  };

  const handleEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnding(event.target.value);
  };

  const handleClick = () => {
    // Send data to the Express.js backend
    axios.post('http://localhost:9000/route', { starting, ending })
      .then(response => {
        console.log(response.data);
        // Handle response data here. e.g., setMessage(response.data.message);
      })
      .catch(err => {
        console.log(err);
        // Handle errors here, e.g., setMessage('An error occurred');
      });
  };

  return (
    <div className="App">
      <h1 style={{fontSize:100}}>Welcome to EcoWay</h1>
      <h3 style={{color: "gray"}}>Our program uses Google Maps API to find the route find the smallest carbon footprint!</h3>
      <div>
        <label>Starting Point:</label> 
        <input type="text" id="starting" name="starting" value={starting} onChange={handleStartChange}></input><br></br> <br></br>
        <label>End Point:</label>
        <input type="text" id="ending" name="ending" value={ending} onChange={handleEndChange}></input> <br></br><br></br>
        <Button variant="success" onClick={handleClick}>Calculate</Button>
        <p>Starting: {starting}</p>
        <p>Ending: {ending}</p> 
        <p>Message: {message}</p>
      </div>
    </div>
  );
}

export default App;
