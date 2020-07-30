import React, { Component } from 'react';

import './intro.scss';

class Intro extends Component {
    render(){
        return (
            <section className="intro">
                <h1 data-anime="fadeIn">Sobre</h1>
                <p data-anime="left">Olá, bem vindo! Sou estudante de Sistemas de Informação (6º período), 24 anos, com foco em Front-End e UI/UX. Apaixonado por tecnologia, decidi seguir a carreira em Web após o fim de meu ensino técnico.</p>
                <p data-anime="left">Além de Front-End, também sou apaixonado por UI e UX Design, áreas que me fascinam e inspiram a dizer muito falando pouco, buscando estudar seus conceitos concomitantemente com programação. </p>
                <p data-anime="left">Meu foco é criar interfaces que inspiram o melhor em todos pois o Design, diferente do que muitos pensam, não é só beleza. Quando feito da maneira certa, é possível mudar a vida das pessoas.</p>
            </section>
        )
    }
}

export default Intro;
