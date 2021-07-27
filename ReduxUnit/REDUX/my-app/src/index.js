import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch({ type: 'INC' })
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch({ type: 'DEC' })
});

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

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