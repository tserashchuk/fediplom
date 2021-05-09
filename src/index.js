import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './index.css';
import 'antd/dist/antd.css';

import {MainLayout} from "./Layout/Layout";
import {Register} from "./Pages/Register";

// тут добавлю роутер для перемещения между служебными страницами типо регистрация, вход, добавления проекта и дашборд
ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={Register}/>
            <Route path="/dashboard" exact component={MainLayout}/>

        </Switch>
    </Router>,
    document.getElementById('root')
);


