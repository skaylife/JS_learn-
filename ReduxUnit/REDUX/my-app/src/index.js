import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';
import Counter from './counter';
import React from 'react';
import ReactDOM from 'react-dom';


const store = createStore(reducer);
const { dispatch } = store;


const { inc, dec, rnd } = bindActionCreators(actions, dispatch);


const update = () => {


  ReactDOM.render(<Counter
    counter={store.getState()}
    inc={inc}
    dec={dec}
    rnd={() => {
      const value = Math.floor(Math.random() * 10);
      rnd(value);
    }} />, document.getElementById('root'));
}

update(); // Вызов функции 

store.subscribe(update);



// store.subscribe(() => {
//   console.log(store.getState());
// })

// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'INC' });



// let state = reducer(undefined, { type: 'INC' });

// state = reducer(state, {});
// console.log(state);
// state = reducer(state, { type: 'INC' });
// console.log(state);