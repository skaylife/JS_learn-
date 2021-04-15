'use strict';

console.log('Запрос данных...');

// Callback функция - промис
const req = new Promise((resolve, reject) => { // Создаем обещание | Если гуд - то вызываем функцию resolve(), как бы ответ от сервера.
  setTimeout(() => {
    console.log('Подготовка данных...');

    const product = {
      name: 'TV',
      price: '2000'
    };

    resolve(product);
  }, 2000);
});

req.then((product) => { // Первый then с Callback функцией 
  return new Promise((resolve) => { // Это Promise
    setTimeout(() => {
      product.status = 'order';
      resolve(product);
    }, 2000);

  }).then(data => {
    data.modify = true;
    return data;

  }).then(data => {
    console.log(data);
  }).finaly(() => {
    console.log('Finaly')
  })
});

// setTimeout(() => {
//   console.log('Подготовка данных');

//   const product = {
//     name: 'TV',
//     price: '2000'
//   };

//   setTimeout(() => {
//     product.status = 'order';
//     console.log(product);
//   }, 2000);

// }, 2000);