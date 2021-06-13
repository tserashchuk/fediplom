import React from "react";
import {Layout, Breadcrumb, Row, Col, Button} from "antd";
import {LayoutMenu} from "./Components/Menu/LayoutMenu";
import {useHistory} from "react-router-dom";

const {Header, Content, Footer} = Layout;

export const LayoutView = (props) => {
    const history = useHistory()

    const handleOpenCreateNewProject = () => {
        history.push('/add-project')
    }

    const handleLogout = () => {
        props.logout()
        history.push('/login')
    }

    return <Layout className="layout">
        <Header>
            <div className="logo"/>
            <Row>
                <Col flex="1 1 200px"><LayoutMenu/></Col>
                <Col flex="0 1 300px">
                    <Button ghost onClick={handleOpenCreateNewProject}>Добавить</Button>&nbsp;
                    <Button ghost onClick={handleLogout}>Выйти</Button></Col>
            </Row>
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


