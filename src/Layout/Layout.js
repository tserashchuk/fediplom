import React from "react";
import {LayoutView} from "./LayoutView";
import axios from 'axios'
import Page from "../Dashboard/components/LinearChart/LinearChart";
import {StatsCounters} from "../Dashboard/components/StatsCounters/StatsCounters";


export class MainLayout extends React.Component {
    state = {
        collapsed: false,
        allComponents: {
            '1': [{component: <StatsCounters/>, size: 6},{component: <StatsCounters/>, size: 6},{component: <StatsCounters/>, size: 6},{component: <StatsCounters/>, size: 6},{component: <Page/>, size: 24}],
            '2': [{component: <Page/>, size: 6}]
        },
        activeComponent: [{component: <StatsCounters/>, size: 6}]
    }
    componentDidMount() {
    let data = axios.get('http://127.0.0.1:5000/api/projects')
     console.log(data.data)
    }

    onSelect = ({item, key}) => {
        this.setState({activeComponent: [...this.state.allComponents[key]]})
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        const {collapsed} = this.state;
        return (
            <LayoutView
                isCollapsed={collapsed}
                onCollapse={this.onCollapse}
                onSelect={this.onSelect}
                activeComponent={this.state.activeComponent}
            />);
    }
}



