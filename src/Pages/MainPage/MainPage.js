import React from "react";
import {Register} from "./Register";


export const MainPage = () => {
    return <div className='loginWrapper'>
        <img className='loginPic' src='/img/312550408009211.png'/>
        <div className='loginForm'>
            <Register/>
        </div>
    </div>
}