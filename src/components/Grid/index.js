import React, { Component } from 'react';
import GridItem from '../GridItem';

import './grid.scss';

class Grid extends Component {
    render(){
        const gridItems = [
            {
                image: 'img/contact-github-api.png',
                link: '#',
                title: 'Contact Github API',
                description: 'Aplicação que retorna dados do usuário pesquisado, provenientes da Github API.',
                languages: ['SASS', 'React', 'Redux', 'Router', 'Axios', 'Javascript'],
                id: 1
            },
            {
                image: 'img/portfolio.png',
                link: '#',
                title: 'Portfolio v2',
                description: 'Segunda interação.',
                languages: ['SASS', 'React', 'Javascript'],
                id: 2
            },
            {
                image: 'img/VueJS-Punch-Bag.jpg',
                link: 'https://github.com/sidneifjr/Vue.JS-Punching-Bag',
                title: 'Vue.JS Punch Bag',
                description: 'Um simples jogo, desenvolvido para prática de novas tecnologias.',
                languages: ['SASS', 'Javascript', 'Vue'],
                id: 3
            },
            {
                image: 'img/design-dog.png',
                link: 'https://github.com/sidneifjr/Criacao-de-Design-Zee.Dog',
                title: 'Design Zee.Dog',
                description: 'Uma propaganda fictícia, sobre o lançamento de um produto pela empresa Zee.Dog.',
                languages: ['SASS', 'Javascript'],
                id: 4
            },
            {
                image: 'img/metroid.jpg',
                link: 'https://codepen.io/sidneifjr/pen/OmMBEw',
                title: 'Metroid - Tribute in CSS',
                description: 'Um tributo à Samus Aran, a heroína que marcou minha infância gamer.',
                languages: ['SASS', 'jQuery'],
                id: 5
            },
            {
                image: 'img/form-validation.png',
                link: 'https://codepen.io/sidneifjr/pen/vrPZWj',
                title: 'Form Validation',
                description: 'Uma validação de formulários completa, com layout experimental.',
                languages: ['SASS', 'Javascript'],
                id: 6
            },
            {
                image: 'img/search-page-concept.jpg',
                link: 'https://codepen.io/sidneifjr/pen/jYyLog',
                title: 'Custom Searchbox',
                description: 'Um conceito de barra de pesquisa baseado em feedback dinâmico do usuário. Javascript e SCSS.',
                languages: ['SASS', 'Javascript'],
                id: 7
            },
            {
                image: 'img/iphone-calculator.jpg',
                link: 'https://codepen.io/sidneifjr/pen/gowgjo',
                title: 'Iphone X Calculator',
                description: 'Calculadora simples, inspirada na estética do recente Iphone X.',
                languages: ['SASS', 'Javascript'],
                id: 8
            },
            {
                image: 'img/simpsons.png',
                link: 'https://codepen.io/sidneifjr/pen/oyqOdm',
                title: 'The Simpsons',
                description: 'Feito a partir da manipulação de objetos e arrays.',
                languages: ['SASS', 'Javascript'],
                id: 9
            },
        ];

        return (
            <section className="grid">
                <h1 id="portfolio" data-anime="left-2">Portfolio</h1>

                {
                    gridItems.map(item => {
                        return (
                            <GridItem key={item.id} image={item.image} link={item.link} title={item.title} description={item.description} languages={item.languages} />
                        )
                    })
                }
            </section>
        )
    }
}

export default Grid;
