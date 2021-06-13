import React, {useEffect, useState} from "react";
import {ProjectListView} from "./ProjectListView";
import axios from "axios";
import {useHistory} from "react-router-dom";


export const ProjectList = () => {
    const history = useHistory()
    const [data, setData] = useState([])

    const projectGet = async () => {
        let postData = await axios.post('http://127.0.0.1:5000/api/projects/get', {}, {headers: {'Authorization': sessionStorage.getItem('secret')}})
        setData(postData.data)
    }
    const deleteProject = async (projid) => {
        await axios.post('http://127.0.0.1:5000/api/project/delete', {id: projid}, {headers: {'Authorization': sessionStorage.getItem('secret')}})
        projectGet()
    }

    useEffect(() => {
        projectGet()
    }, [])

    return (<ProjectListView data={data} deleteProject={deleteProject}/>)
}