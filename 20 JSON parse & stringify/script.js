'use script';

const persone = {
  name: 'Alex',
  tel: '+734556456',
  perents: {
    mon: 'Angela',
    dad: 'Zevs'
  }
};

// Передача данных на сервер JSON
// console.log(JSON.stringify(persone));
// Получение данных с сервера JSON
// console.log(JSON.parse(JSON.stringify(persone)));

// Глубокая копия clone
const clone = JSON.parse(JSON.stringify(persone));
clone.perents.mon = 'Clara';

console.log(persone);
console.log(clone);