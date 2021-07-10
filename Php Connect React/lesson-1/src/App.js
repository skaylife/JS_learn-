import logo from './logo.svg';
import './App.css';
import React, { useState, useEfect } from 'react';



function App() {



  function clickHandler() {
    fetch("http://react-and-php", {
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 1 })
    })
      .then(response => response.text())
      .then(response => {
        console.log(response);
      })
  }

  return (
    <div className="constainer">
      <h1>Dragon Info</h1>
      <button onClick={clickHandler}>Go</button>
    </div>
  );
}

export default App;

