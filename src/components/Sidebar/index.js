import React, { Component } from 'react';
import './sidebar.scss';

class Sidebar extends Component {
    render(){
        return (
            <aside className="sidebar">
                <div className="sidebar-image">
                    <img src="img/me.jpg" title="Yep, that's me!" alt="" />
                </div>
        
                <h1>Sidnei Farias</h1>
                <span>Front-End Developer</span>
        
                <nav className="sidebar-nav">
                    <li>
                        <a data-scroll href="#portfolio">Portfólio</a>
                    </li>

                    <li>
                        <a data-scroll href="#skills">Skills</a>
                    </li>

                    <li>
                        <a data-scroll href="#contato">Contato</a>
                    </li>
                </nav>
        
                <ul className="sidebar-icons">
                    <li>
                        <a href="mailto:sidneijr.77@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-google" aria-hidden="true"></i>
                        </a>
                    </li>
        
                    <li>
                        <a href="https://github.com/sidneifjr" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                    </li>
        
                    <li>
                        <a href="https://codepen.io/sidneifjr/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-codepen" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </aside>
        )
    }
}

export default Sidebar;
