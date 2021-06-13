import React from "react";
import {MainLayout} from "../../GlobalComponents/Layout/Layout";
import {ProjectList} from "./Components/ProjectList/ProjectListContainer";

import {
  Redirect
} from "react-router-dom";
export const DashProjectList = () => {
    let isLogged = sessionStorage.getItem('isLogged')
    return (<>{isLogged ?
        <MainLayout>
            <ProjectList/>
        </MainLayout> : <Redirect to="/login" />
} </>
    )
}