# JS_learn-
Site с index.md https://skaylife.github.io/JS_learn-/ | ветка - (gh-pages)

## Чтоб установить папку node_modules 
npm i или npm install 

## Запустить локально сервер JSON 
npx json-server --watch db.json

## Тема "Getter and Setter" Practice 
`https://jsfiddle.net/7yf0mr9k/`

# Как работают "State" в React? - Num 1

## Стиль ООП
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


