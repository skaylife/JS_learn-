import { createStore } from 'redux';
import reducer from './reducer';
import * as actions from './actions';
import Counter from './components/counter';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));



// update(); // Вызов функции 

// store.subscribe(update);



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