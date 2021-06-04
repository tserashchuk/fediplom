import React from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";

export const LayoutMenu = () => {
    return (
        <>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">
                    <Link to="/">Список проектов</Link>
                </Menu.Item>
            </Menu>
        </>
    )
}


