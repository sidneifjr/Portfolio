import React, { Component } from 'react';

import './tags.scss';

class Tags extends Component {
    render(){
        return (
            <span className={"tag " + this.props.color}>{this.props.text}</span>
        )
    }
}

Tags.defaultProps = {
    text: 'text',
    color: ''
}

export default Tags;
