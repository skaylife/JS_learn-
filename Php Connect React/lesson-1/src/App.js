import './App.css';
import React, { useState, useEffect } from 'react';



function App() {

  const [t1, setT1] = useState();
  const [t2, setT2] = useState();
  const [t3, setT3] = useState();
  const [t4, setT4] = useState();
  const [t5, setT5] = useState([]);

  function task1() {

    fetch("http://react-and-php/", {
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 1 })

    })
      .then(data => data.text())
      .then(data => setT1(data))
  }

  function task2(event) {
    event.preventDefault()
    let elements = event.target.elements;
    let inp1 = elements['num1'].value
    let inp2 = elements['num2'].value
    fetch("http://react-and-php/", {
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 2, num1: inp1, num2: inp2 })
    })
      .then(data => data.text())
      .then(data => setT2(data))
  }



  function task3(event) {
    event.preventDefault()
    let elements = event.target.elements;
    let inp1 = elements['filename'].value;
    let inp2 = elements['filedata'].value;
    fetch("http://react-and-php/", {
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 3, filename: inp1, filedata: inp2 })
    })
      .then(data => data.text())
      .then(data => {
        if (data > 0) setT3(inp1)
        if (data <= 0) setT3(false)
      })

  }
  console.log({ t3 });


  function task4(event) {
    event.preventDefault()
    fetch("http://react-and-php/", {
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 4 })
    })
      .then(data => data.text())
      .then(data => setT4(data))
  }

  function task5(event) {
    event.preventDefault()
    fetch("http://react-and-php/", {
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 5 })
    })
      .then(data => data.json())
      .then(data => setT5(data))
    // .then(data => console.log(data))
  }

  return (
    <div>
      <h1>Dragon Info</h1>
      {/* <p>{text}</p> */}
      <hr />
      <div>
        <h2>Время сервера</h2>
        <button onClick={task1}>GET</button>
        <p>{t1}</p>
      </div>
      <hr />



      <div>
        <h2>Случайное число между</h2>
        <form action="" onSubmit={task2}>
          <div><input type="number" name="num1" defaultValue="30" /></div>
          <div><input type="number" name="num2" defaultValue="44" /></div>
          <button type="sumbit">Push</button>
        </form>
        <p>{t2}</p>
      </div>
      <hr />



      <div>
        <h2>Создание файла</h2>
        <form action="" onSubmit={task3}>
          <div><input type="text" name="filename" /></div>
          <div><input type="text" name="filedata" /></div>
          <button type="sumbit">Push</button>
        </form>
        <p>{(t3) ? <a href={`http://unit14/files/${t3}`} target="_blank" download>Скачать</a> : false}</p>
        <p>{t3}</p>
      </div>
      <hr />



      <div>
        <h2>Получение данных компьютера</h2>
        <form action="" onSubmit={task4}>
          <button type="sumbit">Push</button>
        </form>
        <p>{t4}</p>

        <hr />
        <div>
          <h2>Получение курса валют</h2>
          <form action="" onSubmit={task5}>
            <button type="sumbit">Push</button>
          </form>
          <ul>
            {t5.map(item => <li key={item.ccy}>{item.ccy} - {item.buy}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
