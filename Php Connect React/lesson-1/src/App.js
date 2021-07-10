import logo from './logo.svg';
import './App.css';



function App() {
  function clickHandler() {
    fetch("http://react-and-php", {
      method: 'POST',
      headers: {
        'Contetnt-Type': 'application/x-www-forum-urlencoded'
      },
      body: JSON.stringify({ action: 1 })
    })
      .then(response => response.text())
      .then(response => {
        console.log("Work : ", response);
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

