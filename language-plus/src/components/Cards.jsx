import React from 'react'
import './Cards.css'
import CardItem from './CardItem'
import { Slide } from "react-awesome-reveal"



function Cards() {

    return (

        <div className='cards'>
            <Slide cascade damping={0.1}>
                <h1>Lorem ipsum dolor sit amet, consectetur!</h1>
            </Slide>
            <Slide cascade damping={0.1}>
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
            </Slide>
        </div>
    );
}

export default Cards;