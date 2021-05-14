import React from "react";
import {Layout, Menu, Row, Col} from "antd";
import {PieChartOutlined} from "@ant-design/icons";

const {Header, Content, Footer, Sider} = Layout;
// const {SubMenu} = Menu;


export const LayoutView = (props) => {

    return <Layout style={{minHeight: '100vh'}}>

        <Sider collapsible collapsed={props.isCollapsed} onCollapse={props.onCollapse}>
            <div className="logo"><img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'/></div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onSelect={props.onSelect}>
                <Menu.Item key="1" icon={<PieChartOutlined/>}>
                    Статистика
                </Menu.Item>
                <Menu.Item key="2" icon={<PieChartOutlined/>}>
                    Подбор слов
                </Menu.Item>
            </Menu>
        </Sider>


        <Layout className="site-layout">
            <Header className="site-layout-background" style={{padding: 0}}/>
            <Content style={{margin: '0 16px'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <Row>
                            {props.activeComponent.map((element)=>{
                                return ( <Col span={element['size']}>{element['component']}</Col>
                                )
                            })}
                        </Row>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>

    </Layout>
}