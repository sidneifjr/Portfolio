import React, { Component } from 'react';
import Tags from '../Tags';

import './gridItem.scss';

class GridItem extends Component {
    render(){
        const languagesTag = this.props.languages;

        return (
            <div className="cs-style grid-item" data-anime="box" key={this.props.id}>
                {this.props.image && <img src={this.props.image} alt="" />}

                <a href={this.props.link}>
                    <figcaption>
                        <div className="grid-item-data">
                            <h2>{this.props.title}</h2>
                            <p className="grid-item-data-description">{this.props.description}</p>
                        </div>

                        <div className="tags">
                            {
                                languagesTag.map(item => {
                                    return(
                                        <Tags text={item} color={item} />
                                    )
                                })
                            }
                        </div>
                    </figcaption>
                </a>
            </div>
        )
    }
}

GridItem.defaultProps = {
    image: '',
    link: '',
    title: 'title',
    description: 'description',
    id: '',
    languages: ''
}

export default GridItem;
