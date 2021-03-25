"use strict";

// let num = 0;

// // while (num < 11) {
// //   console.log(num + ' DUBL');
// //   num++;
// // }

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     // continue;
//     break;
//   }

//   console.log(i + ' DUBL');
// }




const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};



// const a = prompt('Один из последних просмотрееных фильмов', ''),
//       b = prompt('На сколько оцените его', ''),
//       c = prompt('Один из последних просмотрееных фильмов', ''),
//       d = prompt('На сколько оцените его', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


// const repeat = 2;
// let num = 0;

// while (repeat > num) {
//   const a = prompt('Один из последних просмотрееных фильмов', ''), 
//         b = prompt('На сколько оцените его', '');
//         if (a != null && b != null && a !='' && b != '' && a.length < 10) {
//           personalMovieDB.movies[a] = b;
//           console.log('Гуд');2
//         } else {
//           console.log('error');
//           num--;
//         }
//         num++;
// }2



// for (let num = 0; num != 2; num++) {
//   const a = prompt('Один из последних просмотрееных фильмов', ''), 
//         b = prompt('На сколько оцените его', '');
//         if (a != null && b != null && a !='' && b != '' && a.length < 10) {
//           personalMovieDB.movies[a] = b;
//           console.log('Гуд');
//         } else {
//           console.log('error');2
//           num--;
//         }
// }

let a = "Вы посмотрели от 10 до 30 фильмов, а точнее ";

if (personalMovieDB.count < 10) {
  console.log("Мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log(a + personalMovieDB.count);
} else {
  console.log('Это баг');
};




