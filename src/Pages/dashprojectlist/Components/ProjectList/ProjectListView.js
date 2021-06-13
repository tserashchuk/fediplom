import React from "react";
import {BarChartOutlined,DeleteOutlined} from '@ant-design/icons';
import {GlobalStat} from "../GlobalStat/GlobalStatContainer";
import {Link} from "react-router-dom";
import {List, Card} from 'antd';


export const ProjectListView = (props) => {
    console.log(props.data)
    return (
        <List
            grid={{gutter: 16, column: 4}}
            dataSource={props.data}
            renderItem={item => (
                <List.Item>
                    <Card title={item.title} actions={[
                        <Link to={`/project/${item.id}`}><BarChartOutlined/></Link>,
                        <DeleteOutlined onClick={()=>props.deleteProject(item.id)}/>
                    ]}>
                        <GlobalStat/>

                    </Card>
                </List.Item>
            )}
        />
    )
}