import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


function App() {
  const [firstDestination, setfirst] = useState("");

  return (
    <div className="App">
      <h1>Welcome to EcoWay</h1>
      <h3>Our program uses Google Maps API to find the route find the smallest carbon footprint!</h3>

     
      <body>
      <label>Starting Point:</label> 
        <input></input><br></br> <br></br>
        <label>End Point: </label>
        <input></input>
    </body>

    </div>
    
  );
}

export default App;
