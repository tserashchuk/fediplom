import React from "react";
import {Layout, Breadcrumb} from "antd";
import {LayoutMenu} from "./Components/Menu/LayoutMenu";
const {Header, Content, Footer} = Layout;

export const LayoutView = (props) => {

    return <Layout className="layout">
        <Header>
            <div className="logo"/>
            <LayoutMenu/>
        </Header>
        <Content style={{padding: '0 50px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">{props.children}</div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
}


