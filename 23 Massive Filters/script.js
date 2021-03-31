'use strict';

// Filter - изменение нвого массива на взятого из старого 

// const names = ['Alex', 'Ann', 'Ksenia', 'Volde']; // Старый массив 

// const shortNames = names.filter(function (name) { // Новый отфильтрованный массив
//   return name.length < 5;
// });

// console.log(shortNames);

//==================================================

// Map - изменение исходного массива 

// const answers = ['IVaN', 'AnnA', 'hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

// Перезапись существющего массива - Лучше такой способ не использовать 
// let answers = ['IVaN', 'AnnA', 'hello'];

//     answers = answers.map(item => item.toLowerCase());

// console.log(answers);

//===================================================

//every/some - Возможность проверять данные, по определенным условиям 

// const some = [1, 'rthrt', '235gfg'];

// console.log(some.some(item => typeof(item) === 'number')); // Callback функция которая проверяет, есть ли в массиве тип данных | Метод some
// console.log(some.every(item => typeof (item) === 'number')); // Подходят, ли все значения под тип данных === number | Метод every

//===================================================

// reduce - схлопывание массива && сборка массива в строчку

// const arr = [5, 4, 6, 3, 1];
// //   0  5 - необязательная строчка 
// //   5  4
// //   9  6
// //  15  3
// //  18  1 = 19
// const res = arr.reduce((sum, current) => sum + current);
// const res = arr.reduce((sum, current) => sum + current, 3); // Можно добавить начальное значение, Пример 4
// console.log(res);

// const arr = ['apple', 'pear', 'plum']; // Результат = applepearplum // apple, pear, plum

// // const res = arr.reduce((sum, current) => sum + ', ' + current); // simple способ 
// const res = arr.reduce((sum, current) => `${sum}, ${current}`); // Через бэктики
// console.log(res);

//===================================================

// Позволяет превратить объект в матрицу матриц 
// const obj = {
//   petr: 'persone',
//   ann: 'persone',
//   dog: 'animal',
//   cat: 'animal'
// };

// // const newArr = Object.entries(obj); // Создается из объекта массив и в нем еще один массив с ключами и значениями
// const newArr = Object.entries(obj)
//  // Callback функция 
// .filter(item => item[1] === 'persone' ) //Получается отфильтрованный массив по значению 'Persone' [ [ 'petr', 'persone' ], [ 'ann', 'persone' ] ]
// .map(item => item[0]); // Получаем нужные нам значения, то есть ключ // [ 'petr', 'ann' ]
// console.log(newArr);



