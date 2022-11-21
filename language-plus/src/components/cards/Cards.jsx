import React from 'react'
import './Cards.css'
import CardItem from './CardItem';
import { Slide } from "react-awesome-reveal"



function Cards() {

    return (

        <div className='cards'>
            <Slide cascade damping={0.1}>
                <h1>Os cursos de idiomas da Language Plus são focados em seu objetivo!</h1>
            </Slide>
            <Slide cascade damping={0.1}>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                //substituindo os props
                                src='images/aula-remota.jpg'
                                text='Inscreva-se já em nossos cursos on-line e assista suas aulas em tempo real.'
                                label='Language+ Live Class'
                                path='/cursos'
                            />
                            <CardItem
                                src='images/aula-presencial.jpg'
                                text='Você pode também, estudar quando e onde quiser! Com a Language+ você vai mais longe.'
                                label='Language+ Go'
                                path='/cursos'
                            />
                        </ul>
                    </div>
                </div>
            </Slide>
        </div>
    );
}

export default Cards;