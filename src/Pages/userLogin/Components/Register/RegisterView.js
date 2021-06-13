import React, {useState} from "react";
import {Button, Input} from "antd";
import {UserOutlined} from "@ant-design/icons";

export const ReisterView = ({registerHandler, handlerBack}) => {
    let [login, setLogin] = useState('null')
    let [pass, setPass] = useState('null')
    let [passConfirm, setPassConfirm] = useState('null')


    return (
        <div className='loginContainer'>
            <div className='loginFormContainer'>
                <Input placeholder="Логин" prefix={<UserOutlined/>} className='loginFormItem'
                       onChange={(e) => setLogin(e.target.value)}/>
                <Input.Password placeholder="Пароль" prefix={'P'} className='loginFormItem'
                                onChange={(e) => setPass(e.target.value)}/>
                <Input.Password placeholder="Подтвердите пароль" prefix={'P'} className='loginFormItem'
                                onChange={(e) => setPassConfirm(e.target.value)}/>
                <Button className='loginFormItem'
                        onClick={handlerBack}>Назад</Button>
                <Button type="primary" className='loginFormItem'
                        onClick={() => registerHandler(login, pass, passConfirm)}>Регистрация</Button>
            </div>
        </div>
    )
}