import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Lorem ipsum dolor sit amet, consectetur!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            //substituindo os props
                            src='images/aula-remota.jpg'
                            text='Inscreva-se já em nossos cursos on-lines e assista suas aulas onde preferir.'
                            label='AULAS REMOTAS'
                            path='/cursos'
                        />
                        <CardItem
                            src='images/aula-presencial.jpg'
                            text='Você pode também, estar mais próximo ao seus colegas e professores! Faça cada vez mais network durante as aulas.'
                            label='AULAS PRESENCIAIS'
                            path='/cursos'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;