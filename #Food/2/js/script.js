"use strict";

if (5 == 5) {
  console.log('ХeХ');
} else {
  console.log('Error3');
} 

(5 != 5) ? console.log('1-1') : console.log('BUG');

const num = 430;

switch (num) {
  case 30:
    console.log('Неверно');
    break;
  case 40:
    console.log('А за такое бан');
    break;
  case 50:
    console.log('Правильно');
    break;
  default:
    console.log('Секрет');
    break;
}

