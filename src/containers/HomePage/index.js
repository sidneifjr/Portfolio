import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';

class Home extends Component {
    render(){
        return (
            <React.Fragment>
                <Sidebar />
                <Content />
            </React.Fragment>
        )
    }
}

export default Home;
