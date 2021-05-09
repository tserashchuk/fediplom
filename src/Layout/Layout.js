import React from "react";
import {LayoutViev} from "./LayoutView";

import Page from "../Components/LinearChart/LinearChart";
import {StatsCounters} from "../Components/StatsCounters/StatsCounters";


export class MainLayout extends React.Component {
    state = {
        collapsed: false,
        allComponents: {
            '1': [{component: <StatsCounters/>, size: 24}],
            '2': [{component: <StatsCounters/>, size: 6}]
        },
        activeComponent: [{component: <StatsCounters/>, size: 6}]
    }

    onSelect = ({item, key, keyPath, selectedKeys, domEvent}) => {
        this.setState({activeComponent: [...this.state.allComponents[key]]})
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        const {collapsed} = this.state;
        return (
            <LayoutViev
                isCollapsed={collapsed}
                onCollapse={this.onCollapse}
                onSelect={this.onSelect}
                activeComponent={this.state.activeComponent}
            />);
    }
}



