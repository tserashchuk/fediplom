import React from "react";
import './assets/style.css'
import {LoginView} from "./Components/Login/LoginView";
import {ReisterView} from "./Components/Register/RegisterView";

export const AuthView = ({registerHandler,loginHandler, registerFlag, handlerBack} ) => {
    return (registerFlag ? <ReisterView registerHandler={registerHandler} handlerBack={handlerBack}/>
        : <LoginView loginHandler={loginHandler} handlerBack={handlerBack}/>)
}