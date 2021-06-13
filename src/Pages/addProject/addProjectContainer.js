import React from "react";
import {AddProjectView} from "./addProjectView";
import {useHistory} from "react-router-dom";
import axios from "axios";


export const AddProject = () => {
    const history = useHistory()

    const projectCreate = async (name,region) => {
        let postData = await axios.post('http://127.0.0.1:5000/api/project/create', {'name':name,'region':region}, {headers: {'Authorization': sessionStorage.getItem('secret')}})
        history.push('/')
    }

    return (<AddProjectView projectCreate={projectCreate} />)
}