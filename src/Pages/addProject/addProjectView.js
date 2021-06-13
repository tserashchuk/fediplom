import React, {useState} from "react";
import {Button, Input} from "antd";
import './assets/style.css'
import {Link} from "react-router-dom";

export const AddProjectView = (props) => {
    const [name,setName] = useState('')
    const [region,setRegion] = useState('')

    return(<div className='addContainer'>
            <div className='addFormContainer'>
                <Input placeholder="Название проекта" className='addFormItem' onChange={(e) => setName(e.target.value)}/>
                <Input placeholder="Регион" className='addFormItem' onChange={(e) => setRegion(e.target.value)}/>
                <Input.TextArea className='addFormItem' placeholder='Добавьте ключевые запросы - каждый с новой строки'/>
                <Button className='addFormItem'><Link to='/'>К списку проектов</Link></Button> <Button type="primary" onClick={()=>props.projectCreate(name,region)} className='addFormItem'>Создать</Button>

            </div>
        </div>)
}