

import React from 'react';
import Header from './components/Header';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Cadastro from './Cadastro';
import Login from './Login';
import { BrowserRouter, Route, Switch, Redirect, matchPath} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    
    <BrowserRouter>
        <Switch>
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
        
        </Switch>
    </BrowserRouter>


, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
