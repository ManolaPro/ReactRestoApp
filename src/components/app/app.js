import React from 'react';
import {MainPage, CartPage} from '../pages';
import {Route} from 'react-router-dom';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';

import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Route path='/' exact component={MainPage}/>
            <Route path="/cart" component={CartPage}/>
        </div>
    )
}

export default WithRestoService()(App);