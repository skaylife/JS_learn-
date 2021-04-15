const btn = document.querySelector('button'),
  overlay = document.querySelector('.overlay')

// btn.onclick = function () {
//   alert('Click 22');
// };

// btn.onclick = function () {
//   alert('Click 33');
// };
// let i = 0;

const deleteElement = (event) => {
  console.log(event.currentTarget);
  console.log(event.type);
  // i++;
  // if (i == 1) {
  //   btn.removeEventListener('click', deleteElement);
  // }

};


btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);
// btn.addEventListener('click', deleteElement);

// const link = document.querySelector('a');

// link.addEventListener('click', function (event) {
//   event.preventDefault();

//   console.log(event.target);
// });

