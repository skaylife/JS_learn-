import logo from './logo.svg';
import './App.css';
import React, { useState, useEfect } from 'react';



function App() {

  const [t1, setT1] = useState(''); // Для вывода

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
        console.log("Work backend : ", response);
        setT1(response);
      })
  }

  return (
    <div className="constainer">
      <h1>Dragon Info</h1>
      <button onClick={clickHandler}>Go</button>
      <h3>Вывод с файла :</h3>
      <div>{t1}</div>
    </div>
  );
}

export default App;

