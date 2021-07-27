import { createStore } from 'redux';



const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    default:
      return state;
  }
}

const store = createStore(reducer)
console.log(store.getState());

store.dispatch({ type: 'INC' });
console.log(store.getState());
store.dispatch({ type: 'INC' });
console.log(store.getState());
store.dispatch({ type: 'INC' });
console.log(store.getState());
store.dispatch({ type: 'INC' });
console.log(store.getState());

// let state = reducer(undefined, { type: 'INC' });

// state = reducer(state, {});
// console.log(state);
// state = reducer(state, { type: 'INC' });
// console.log(state);