import React, { Component } from 'react';

import './goTopBtn.scss';

class GoTopBtn extends Component {
    render(){
        return (
            <div className="btnTop">
                <button>
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

export default GoTopBtn;
