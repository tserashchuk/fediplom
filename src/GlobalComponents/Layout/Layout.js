import React from "react";
import {LayoutView} from "./LayoutView";
import axios from 'axios'
import {Button} from "antd";

let secret = ''

export class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            qw: []
        }
    }

    componentDidMount() {

    }

    projectGet = () => {
        axios.post('http://127.0.0.1:5000/api/project/get', {name: 'value'}, {headers: {'Authorization': localStorage.getItem('secret')}})
            .then((data) => {
                this.setState({qw: [...data.data]})
            })
            .then(() => console.log(this.state.qw))
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
        return (<>




            <LayoutView
                isCollapsed={collapsed}
                onCollapse={this.onCollapse}
                onSelect={this.onSelect}
                activeComponent={this.state.activeComponent}>
                                 <Button onClick={this.projectGet}>projectGet</Button>
            {this.state.qw.map((item) => {
                return (item.name)
            })}
                {this.props.children}

            </LayoutView></>);
    }
}