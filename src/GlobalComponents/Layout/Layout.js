import React from "react";
import {LayoutView} from "./LayoutView";
import axios from 'axios'


export class MainLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    logout = async () => {
        await axios.post('http://127.0.0.1:5000/logout', {}, {headers: {'Authorization': sessionStorage.getItem('secret')}})
        sessionStorage.clear()
    }

    render() {
        return (<LayoutView logout={this.logout}> {this.props.children} </LayoutView>);
    }


}