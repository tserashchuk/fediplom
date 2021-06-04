import React from 'react';
import ReactDOM from 'react-dom';
import {Login} from "./Pages/userLogin/LoginContainer";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './index.css';
import 'antd/dist/antd.css';

import {DashboardMain} from "./Pages/dashboardMain/dashContainer";
import {DashProjectList} from "./Pages/dashprojectlist/DashProjectList";



ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={DashProjectList}/>
            <Route path="/dashboard" exact component={DashboardMain}/>
            <Route path="/login" exact component={Login}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);


