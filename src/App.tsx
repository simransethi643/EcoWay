import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Wrapper, Status } from '@googlemaps/react-wrapper'

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [starting, setStarting] = useState("");
  const [ending, setEnding] = useState("");


  const handleStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStarting(event.target.value);
  };
  const handleEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnding(event.target.value);
  };
  const handleClick = () => {
    // 👇 "message" stores input field value
    setStarting(starting);
    setEnding(ending);
  };

  return (
    <div className="App">
      <h1 style={{fontSize:100}}>Welcome to EcoWay</h1>
      <h3 style={{color: "gray"}}>Our program uses Google Maps API to find the route find the smallest carbon footprint!</h3>

      <body>
      <br></br>
      <label>Starting Point:</label> 
        <input type="text" id="starting" name="starting" value={starting} onChange={handleStartChange}></input><br></br> <br></br>
        <label>End Point:</label>
        <input type="text" id="ending" name="ending" value={ending} onChange={handleEndChange}></input> <br></br><br></br>
        <Button variant="success"onClick={handleClick}>Calculate</Button>
        <p>{starting}</p>
        <p>{ending}</p> 
    </body>

    </div>

    
  );
  }

export default App;
