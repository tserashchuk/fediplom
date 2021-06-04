import React from "react";
import {Statistic, Card, Row, Col} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';

export const KeyStatsView = () => {
    return (
        <div>
            <Row gutter={16}>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Позитив"
                            value={11.28}
                            precision={2}
                            valueStyle={{color: '#3f8600'}}
                            prefix={<ArrowUpOutlined/>}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Негатив"
                            value={11.28}
                            precision={2}
                            valueStyle={{color: '#3f8600'}}
                            prefix={<ArrowUpOutlined/>}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Свои источники"
                            value={11.28}
                            precision={2}
                            valueStyle={{color: '#3f8600'}}
                            prefix={<ArrowUpOutlined/>}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Нейтральные"
                            value={9.3}
                            precision={2}
                            valueStyle={{color: '#cf1322'}}
                            prefix={<ArrowDownOutlined/>}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}