import React, {useEffect, useState} from "react";
import {DashboardMainView} from "./dashView";

export const DashboardMain = () => {
    let isLogged = localStorage.getItem('isLogged')
    return (<>{isLogged ? <DashboardMainView/> : 'Пройдите авторизацию'}</>)
}