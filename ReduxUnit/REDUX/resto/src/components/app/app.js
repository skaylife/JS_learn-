import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc/with-resto-service';
import Background from './food-bg.jpg';

const App = ({ RestoService }) => {
    console.log(RestoService.url)
    return (
        <div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
            <AppHeader total={50} />
            <MainPage />
            <CartPage />
        </div>
    )
}

export default WithRestoService()(App);