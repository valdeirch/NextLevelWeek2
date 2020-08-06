import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://conhecimentocientifico.r7.com/wp-content/uploads/2019/03/entenda-o-que-e-a-teoria-da-relatividade-proposta-por-einstein.jpg" alt="Valdeir Chaves"/>
                <div>
                    <strong>Albert Einstein</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Desenvolvi a teoria da relatividade geral, um dos pilares da física moderna ao lado da mecânica quântica.
                <br />
                Meus principais trabalhos foram:
                <br />
                relatividade geral, relatividade restrita, movimento browniano, efeito fotoelétrico, equivalência massa-energia, equações de campo, estatística de Bose-Einstein e  paradoxo EPR.
                <br />
                Aguardo seu contato!
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;