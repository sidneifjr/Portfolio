import React, { Component } from 'react';
import './form.scss';

class Form extends Component {
    render(){
        return (
            <div className="contact" id="contact" data-anime="left">
                <h1>Contato</h1>
                <p>Atualmente, atuo como Estagiário de Front-End na <a href="https://www.sirius.com.br/" target="_blank" rel="noopener noreferrer">Sirius Interativa.</a></p>
                <p>Deseja ver meu currículo? <a href="curriculo-front-end.pdf" target="_blank">Aproveite!</a> Você pode falar comigo pelo formulário abaixo... </p>

                <form className="contact-form" method="POST" action="https://simple-form.com/sidneijr.77@gmail.com">
                    <label className="input-field">
                        <input type="text" name="name" placeholder="Como se chama?" required />
                    </label>

                    <label className="input-field">
                        <input type="text" name="email" placeholder="Email, para retornar contato." required />
                    </label>

                    <label className="input-field">
                        <textarea type="text" name="description" placeholder="O que deseja falar?" required></textarea>
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;
