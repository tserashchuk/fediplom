import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './index.css';
import 'antd/dist/antd.css';

import {MainLayout} from "./Layout/Layout";
import {MainPage} from "./Pages/MainPage/MainPage";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/dashboard" exact component={MainLayout}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);


