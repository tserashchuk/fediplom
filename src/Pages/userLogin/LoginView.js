import React, {useState} from "react";
import {Button, Input, Space} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone, UserOutlined} from '@ant-design/icons';
import './assets/style.css'

export const LoginView = ({ loginHandler }) => {
    let [login, setLogin] = useState('null')
    let [pass,setPass] = useState('null')

    return (
        <div className='loginContainer'>
            <div className='loginFormContainer'>
                <Input placeholder="Логин" prefix={<UserOutlined/>} className='loginFormItem' onChange={(e)=>setLogin(e.target.value)}/>
                <Input.Password placeholder="Пароль" prefix={'P'} className='loginFormItem'  onChange={(e)=>setPass(e.target.value)}/>
                <Button type="primary" className='loginFormItem' onClick={()=>loginHandler(login,pass)}>Войти</Button>
            </div>
        </div>
    )
}