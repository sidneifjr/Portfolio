import React, { Component } from 'react';

import './skill-list.scss';

class SkillList extends Component {
    render(){
        const skills = [
            {
                src: "img/skills/html5.svg",
                alt: "HTML5",
            },
            {
                src: "img/skills/css.svg",
                alt: "CSS",
            },
            {
                src: "img/skills/sass.svg",
                alt: "SASS",
            },
            {
                src: "img/skills/bootstrap.svg",
                alt: "Bootstrap",
            },
            {
                src: "img/skills/javascript.svg",
                alt: "Javascript",
            },
            {
                src: "img/skills/react.svg",
                alt: "React",
            },
            {
                src: "img/skills/typescript.png",
                alt: "Typescript",
            },
            {
                src: "img/skills/gulp.jpg",
                alt: "Gulp",
            },
            {
                src: "img/skills/parcel.jpg",
                alt: "Parcel",
            },
            {
                src: "img/skills/github.svg",
                alt: "Github",
            },
            {
                src: "img/skills/illustrator.svg",
                alt: "Illustrator",
            },
            {
                src: "img/skills/jquery.svg",
                alt: "jQuery",
            },
            {
                src: "img/skills/docker.png",
                alt: "Docker",
            },
        ];

        return (
            <section className="skills" id="skills" data-anime="left">
                <h1> Skills </h1>

                <ul className="skills-list">
                    {
                        skills.map(skillItem => {
                            return(
                                <li>
                                    <img src={skillItem.src} alt={skillItem.alt} title={skillItem.alt} />
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default SkillList;
