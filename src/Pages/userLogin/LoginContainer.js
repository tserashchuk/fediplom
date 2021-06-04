import React from "react";
import axios from "axios";
import {LoginView} from "./LoginView";
import {Redirect} from "react-router-dom";

// username: 'dsffds', password: 'sdf1'
// username: 'dsffds', password: 'sdf2'

export const Login = () => {

    let isLogged = localStorage.getItem('isLogged')


    const loginHandler = async (login, pass) => {
        let data = await axios.post('http://127.0.0.1:5000/login', {username: login, password: pass})
        if (data.data !== 'False') {
            await localStorage.setItem('secret', data.data);
            await localStorage.setItem('isLogged', true);
        } else {
            await localStorage.setItem('isLogged', false);
        }
    }


    return (isLogged ? <Redirect to="/"/> : <LoginView loginHandler={loginHandler}/>)
}