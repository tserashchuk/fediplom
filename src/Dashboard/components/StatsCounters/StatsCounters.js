import React from "react";
import { Statistic, Card } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

export const StatsCounters = () =>{
    return <div className="site-statistic-demo-card">
        <Card>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            // suffix="%"
          />
        </Card>
       </div>
}