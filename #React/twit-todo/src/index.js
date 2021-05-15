import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/app/';

// class WhoAmI extends Component {
// constructor(props) { // Конструктор 
//   super(props);    // Супер Конструктор
//   this.state = {
//     years: 15,
//     city: 'New - York'
//   }

// ПЕРВЫЙ СПОСОБ

// this.nextYear = this.nextYear.bind(this); // Привязка nextYear - bind к контексту - и записываем в объект nextYear

// nextYear() {
//   // this.state.years++; 
//   this.setState(state => ({
//     years: ++state.years
//   }))
// }

// Второй способ 

//   this.nextYear = () => { // Стрелочная функция сохранияет контекст от родителя
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   }
// }

// Третий способ 

//   state = {
//     years: 15,
//     city: 'New - York'
//   }

//   nextYear = () => { // Стрелочная функция сохранияет контекст от родителя
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   }

//   render() {
//     const { name, surname, link } = this.props; // Контекст вызова
//     const { years } = this.state;
//     return (
//       <>
//         <button onClick={this.nextYear}>++</button>
//         <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//         <a href={link}>My Profile</a>
//       </>
//     )
//   }
// }

// // function WhoAmi({ name, surname, link }) {
// //   return (
// //     <>
// //       <h1>My name is {name}, surname - {surname}</h1>
// //       <a href={link}>My Profile</a>
// //     </>
// //   )
// // }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name="Skay4" surname="Life" link="https://vk.com" />
//       <WhoAmI name="Skay12" surname="Life" link="https://vk.com" />
//       <WhoAmI name="Skay123" surname="Life" link="https://vk.com" />
//     </>
//   )
// }


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
