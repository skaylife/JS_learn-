import { createStore } from 'redux';





const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc())
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec())
});

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
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