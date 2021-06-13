import React, {useEffect, useState} from "react";
import {DashboardMainView} from "./dashView";
import axios from "axios";
import { useParams } from "react-router-dom";
export const DashboardMain = () => {
    let isLogged = sessionStorage.getItem('isLogged')

    const [data, setData] = useState([{value:'',id:''}])
    let { id } = useParams();
    console.log(id)
    const projectGet = async () => {
        let postData = await axios.post('http://127.0.0.1:5000/api/project/get', {id: id}, {headers: {'Authorization': sessionStorage.getItem('secret')}})
        setData(postData.data)


    }

    useEffect(() => {
        projectGet()
    }, [])

    return (<>{isLogged ? <DashboardMainView data={data}/> : 'Пройдите авторизацию'}</>)
}