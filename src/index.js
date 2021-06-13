import React from 'react';
import ReactDOM from 'react-dom';
import {Auth} from "./Pages/userLogin/AuthContainer";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './index.css';
import 'antd/dist/antd.css';

import {DashboardMain} from "./Pages/dashboardMain/dashContainer";
import {DashProjectList} from "./Pages/dashprojectlist/DashProjectList";
import {AddProject} from "./Pages/addProject/addProjectContainer";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={DashProjectList}/>
                <Route path="/add-project" component={AddProject}/>
                <Route path="/login" component={Auth}/>
                <Route path="/project/:id" component={DashboardMain}/>
            </Switch>
        </Router>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));


