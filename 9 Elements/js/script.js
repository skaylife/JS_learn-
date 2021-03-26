'use strict';

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');

// console.log(btns[0]);

// const circle = document.getElementsByClassName('circle');

// console.log(circle);

// const hearts = document.querySelectorAll('.heart');

// console.log(hearts);

// hearts.forEach(item => {
//   console.log(item);
// });

// const oneHeart = document.querySelector('div');

// console.log(oneHeart);

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circle = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  oneHeart = document.querySelector('.heart'),
  wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'black';
// box.style.width = '500px';

box.style.cssText = 'background-color: green; width: 450px';

btns[1].style.borderRadius = '50%';
circle[0].style.backgroundColor = 'red';
circle[2].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'grey';
// }

// hearts.forEach(item => {
//   item.style.backgroundColor = 'blue';
// });

const div = document.createElement('div');
// const text = document.createTextNode('Т')

div.classList.add('black');

document.body.append(div);

document.querySelector('.wrapper').append(div);

wrapper.prepend(div);

circle[1].remove();

// div.innerHTML = "<h1>Hell0 DOW</h1>";

// div.textContent = "<h1>Hell0 DOW</h1>";