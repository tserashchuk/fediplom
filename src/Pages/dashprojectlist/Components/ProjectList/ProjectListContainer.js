import React from "react";
import {Collapse} from 'antd';
import {GlobalStat} from "../GlobalStat/GlobalStatContainer";
import {Button} from "antd";
import {Link} from "react-router-dom";

const {Panel} = Collapse;

export const ProjectList = () => {

    function callback(key) {
        console.log(key);
    }

    return (
        <Collapse onChange={callback}>
            <Panel header="Электроник" key="1">
                <GlobalStat/>
                <Button type="primary">
                    <Link to="/dashboard">Подробнее</Link>
                </Button>
            </Panel>
            <Panel header="Panasonic" key="2">
                <GlobalStat/>
                <Button type="primary">
                    <Link to="/dashboard">Подробнее</Link>
                </Button>
            </Panel>
            <Panel header="Super Sonic" key="3">
                <GlobalStat/>
                <Button type="primary">
                    <Link to="/dashboard">Подробнее</Link>
                </Button>
            </Panel>
        </Collapse>
    )
}