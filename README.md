# JS_learn-
Site с index.md https://skaylife.github.io/JS_learn-/ | ветка - (gh-pages)

## Чтоб установить папку node_modules 
npm i или npm install 

## Запустить локально сервер JSON 
npx json-server --watch db.json

## Тема "Getter and Setter" Practice 
`https://jsfiddle.net/7yf0mr9k/`

## Как установить чистиый TypeScript?
```sh
npm init -y
npm i typescript --save-dev
npx tsc --init
```
Строчка для установки пакетов для Webpack:

`npm i html-webpack-plugin webpack-dev-server webpack ts-loader css-loader style-loader`

# Как в Reacte'e работают "State'ты"? - Num 1

## Стиль ООП - 58 строчек кода
```sh
import React from "react";

class FunctionStyle extends React.Component {
  constructor() { // Объявляется Конструктор
    super();
    this.state = { // Создается состояние State
      count: 0, // Создается начальная точка счётчика
      comment: [] // Создается массив с комментариями
    }
    this.myRef = React.createRef(); // Создаются рефы, и импортируются из React
  }
// Счетчик
  handler = () => {
    let currentCount = this.state.count; // Создается - currentCount = для записис State, так как стайт менять нельзя, его можно только читать 
    currentCount++; 
    this.setState({
      count: currentCount // Счетчик записывается в currentCount
    });
  };
// Добавление коммнетариев 
  addComment = () => {
    let comment = this.myRef.current.value; // Вытаскиеваем зачение поля из comment
    let allComment = this.state.comment; // Создаём переменную со значениясм комментариев
    allComment.push(comment); // Добавляем одиночные комментарии в список комментариев 
    this.setState({
      'allComment' : comment // Всё это записываем в состояние State
    });
    this.myRef.current.value = ''; // Очищаем Ref
  }

  render() {
    return (
      <>
        <h1>State</h1>
        <div>
          <button onClick={this.handler}>This button change state</button>
        </div>
        <div>
          {this.state.count % 2 === 0 ? 'Целое' : 'Не Целое'}
        </div>
        <div>{this.state.count}</div>
        <div>
          <textarea ref={this.myRef}></textarea>
        </div>
        <div>
          <button onClick = {this.addComment}>Add comment</button>
        </div>
        <div>
          <ul>
            {this.state.comment.map((item, index) => <li key={index.toString()}>{item}</li>)}
          </ul>
        </div>
      </>
    );
  }
}

export default FunctionStyle;

```

## Функциональный стиль - 48 строчек кода 
```sh
import React from "react";
import { useState } from "react";

function Comp2() {
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState([]);

  let myRef = React.createRef();

  let handler = () => {
    let currentCount = count;
    currentCount++;
    setCount(currentCount);
  };

  let addComment = () => {
    let commentValue = myRef.current.value;
    let comments = [...comment, commentValue];
    setComment(comments);
    myRef.current.value = '';
  }

  return (
    <>
      <h1>State</h1>
      <div>
        <button onClick={handler}>Смне стоятояния (State)</button>
      </div>
      <div>{count % 2 === 0 ? "Без остатка" : "С остатком"}</div>
      <div>{count}</div>
      <div>
        <textarea ref={myRef}></textarea>
      </div>
      <div>
        <button onClick={addComment}>Push</button>
      </div>
      <div>
        <ul>
          {comment.map((item, index) => <li key={index.toString()}>{item}</li>)}
        </ul>
      </div>
    </>
  );
}

export default Comp2;
```

## Скрины проектов
Redux/resto
![opera_NB5IBqf08V](https://user-images.githubusercontent.com/48244659/127815920-bb4e9f26-2214-4110-b2d1-8d2217d4b1b4.jpg)

