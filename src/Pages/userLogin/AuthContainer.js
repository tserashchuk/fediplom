import React, {useState} from "react";
import axios from "axios";
import {AuthView} from "./AuthView";
import {useHistory} from "react-router-dom";

// username: 'dsffds', password: 'sdf1'
// username: 'dsffds', password: 'sdf2'

export const Auth = () => {
    const history = useHistory()
    const [registerFlag, setRegisterFlag] = useState(false)


    const loginHandler = async (login, pass) => {
        let data = await axios.post('http://127.0.0.1:5000/login', {username: login, password: pass})
        if (data.data !== 'False') {
            await sessionStorage.setItem('secret', data.data);
            await sessionStorage.setItem('isLogged', true);
            history.push('/')
        } else {
            await sessionStorage.setItem('isLogged', false);
        }
    }

    const registerHandler = async (login, pass, confirmPass) => {
        if (pass, confirmPass) {
        let data = await axios.post('http://127.0.0.1:5000/api/user/create', {username: login, password: pass})
        history.push('/')}

    }

    const handlerBack = () => {
        console.log(registerFlag)
        setRegisterFlag(!registerFlag)
        console.log(registerFlag)
    }


    return (
        <AuthView
            loginHandler={loginHandler}
            registerHandler={registerHandler}
            registerFlag={registerFlag}
            handlerBack={handlerBack}/>
    )
}