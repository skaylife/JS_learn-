"use strict";


// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: true,
//   start: function () {
//     personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');

//     while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//       personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
//     }
//   },
//   rememberMyFilms: function () {
//     for (let num = 0; num != 2; num++) {
//       const a = prompt('Один из последних просмотрееных фильмов', ''),
//         b = prompt('На сколько оцените его', '');
//       if (a != null && b != null && a != '' && b != '' && a.length < 10) {
//         personalMovieDB.movies[a] = b;
//         console.log('Гуд');
//       } else {
//         console.log('error');
//         num--;
//       }
//     }
//   },
//   showMyDB: function (hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },

//   toggleVisibleMyDB: function () {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false;
//     } else {
//       personalMovieDB.privat = true;
//     }
//   },

//   writeYourGenres: function () {
//     for (let i = 1; i < 4; i++) {
//       let a = prompt(`Ваш любимый жанр под номером ${i}`, '');

//       if (a === '' || a == null) {
//         console.log('Некорректные данные');
//         i--;
//       } else {
//         personalMovieDB.genres[i - 1] = a;
//       }

//       personalMovieDB.genres.forEach((item, i) => {
//         console.log(`Любимый жанр ${i + 1} это ${item}`)
//       });

//     }
//     console.log('OBJ- ', personalMovieDB);


//   }
// };

//Старые способы

console.log(typeof (String(null)));
console.log(String(null));
console.log(typeof (String(4)));


console.log(Number('5'));

//Унарный плюс
console.log(typeof (+'5'));

