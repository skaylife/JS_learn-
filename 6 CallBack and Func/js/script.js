"use strict";

// function first() {
//   setTimeout(function() {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`Изучаю ${lang}`);
//   callback();
// }

// function text() {
//   console.log('Я прошел этот урок');
// }

// learnJS('JavaScript', text);


const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  }
};

const {border, bg} = options.colors;
// console.log(border);
// console.log(bg);


// for (let key in options) {
//     console.log(`Свойство - ключ: ${key} имеет значение: ${options[key]}`);
// }

// let counter = 1;

// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство - ключ: ${i} имеет значение: ${options[key][i]}`);

//     }
//   } else {
//     console.log(`Свойство - ключ: ${key} имеет значение: ${options[key]}`);
//     counter++;
//   }
// }

// console.log(counter);


// console.log(Object.keys(options));
// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;
// // delete options.colors.border;
// console.log(options);
// console.log(options.name);


