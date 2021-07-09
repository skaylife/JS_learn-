import logo from './logo.svg';
import './App.css';
import React from 'react';
import Goods from '../containers/Goods';
import GoodsList from '../containers/GoodsList';

function App() {
  return (
    <div>
      <Goods />
      <GoodsList />
    </div>
  );
}

export default App;
