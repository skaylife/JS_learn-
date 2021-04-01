'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите ваше имя');

// const reg = /\w/g;

// console.log(ans.match(reg));

// \d - ищем цифры
// \w - ищем все буквы
// \s - ищем все пробелы
// \D - ищем НЕ цифры
// \W - ищем НЕ буквы

// i Найти независимо от регистра
// g Найьт несколько повторов
// m Много строчный режим - строки могут быть, не в одну строку)

// console.log(ans.search(reg));

// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, "*"));

// console.log('123-23-24'.replace(/-/g, "|"))

const str = 'My name is c3p0';

console.log(str.match(/\D/g));
