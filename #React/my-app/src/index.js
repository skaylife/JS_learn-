import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';



const Header = () => {
  return <h2>Gello World</h2>
}

const Field = () => {
  const holder = "Enter here";
  const styleField = {
    width: '300px'
  }

  return <input
    style={styleField}
    type="text"
    placeholder={holder}
    autoComplete=""
    className="first"
    htmlFor="" />
}

const Button = () => {
  const text = "Log in";
  const logged = true;

  return <button>{logged ? "auth" : text}</button>
}

const App = () => {
  return (
    <div>
      <Header />
      <Field />
      <Button />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
