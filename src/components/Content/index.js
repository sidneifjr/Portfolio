import React, { Component } from 'react';
import Grid from '../Grid';
import SkillList from '../Skill-List';
import GoTopBtn from '../GoTopBtn';
import Form from '../Form';
import Intro from '../Intro';

import './content.scss';

class Content extends Component {
    render(){
        return (
            <section className="content">
                <Intro />

                <Grid />

                <SkillList />

                <Form />

                <GoTopBtn />
            </section>
        )
    }
}

export default Content;
