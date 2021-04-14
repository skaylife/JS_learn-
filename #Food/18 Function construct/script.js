'use strict';

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}`);
//   };
// }

// User.prototype.exit = function () {
//   console.log(`Пользователь ${this.name} ушел`);
// };

// const petr = new User('Petr', 28);
// const alex = new User('Alex', 20);

// petr.hello();
// petr.exit();

// alex.hello();

// console.log(petr);
// console.log(alex);


// class User2 {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//   }
//   hello() {
//     console.log(`Hello ${this.name}`);
//   }
//   exit() {
//     console.log(`Пользователь ${this.name} ушел`);
//   }
// }



// 1 - Обычная функция: this = window, но если стоит use scrict - то будет undefined

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return this.a + this.b;
//   }

//   console.log(sum());
// }
// showThis(4, 6);

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }

//   console.log(sum());
// }
// showThis(4, 6);


//2 - Контекст у методов объекта - сам объект

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this);
//   }
// };

// obj.sum();

// 3 - this в конструкторах и классах - это новый экземпляр объекта

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// }

// const petr = new User('Petr', 28);

// function sayName() {
//   console.log(this);
//   console.log(this.name);
// }

// const user = {
//   name: 'Petr'
// };

// sayName.call(user);
// sayName.apply(user);

// 4 Ручная привязка this: call, apply, bind

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(13));


// const obj = {
//   num: 5,
//   sayNumber: function () {
//     const say = () => {
//       console.log(this.num);
//     };

//     say();
//   }
// };

// obj.sayNumber();

// const double = (a) => a * 2;

// console.log(double(10));


class Regtangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Метод
  calcArea() {
    return this.height * this.width;
  }
}

// Наследование 
class ColoredRectangleWithText extends Regtangle {
  constructor(height, width, text, bgColor) {
    super(height, width); // Вызывается для того чтоб не писать height, width - Наследование
    this.text = text;
    this.bgColor = bgColor;
  }

  // Метод
  showMyProps() {
    console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`); // `` - Это бэктики
  }
}

const div = new ColoredRectangleWithText(25, 11, 'Hello world', 'yellow');

div.showMyProps();
console.log(div.calcArea());

// const square = new Regtangle(12, 10);
// const long = new Regtangle(11, 11);

// console.log(square.calcArea());
// console.log(long.calcArea());