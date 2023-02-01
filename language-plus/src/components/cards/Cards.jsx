import React from 'react'
import './Cards.css'
import CardItem from './CardItem';
import { Slide } from "'react-awesome-reveal'"



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



                        <Slide cascade damping={0}>
                            <h1>Confira nossos cursos disponíveis</h1>

                            <ul className='cards__items'>
                                <CardItem
                                    src='https://images.pexels.com/photos/2209444/pexels-photo-2209444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                    text='English+ com enfoque em Business, Cities & Travel.'
                                    label='Inglês'
                                    path='/cadastro'
                                />
                                <CardItem
                                    src='https://images.pexels.com/photos/54097/spain-flag-flutter-spanish-54097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                    text='Español+ com enfoque em Business, Cities & Travel.'
                                    label='Espanhol'
                                    path='/cadastro'
                                />
                                <CardItem
                                    src='https://images.unsplash.com/photo-1589889353869-b0c95b307770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmVzZSUyMGZsYWd8ZW58MHx8MHx8&w=1000&q=80'
                                    text='普通话+ com enfoque em Business, Cities & Travel.'
                                    label='Mandarim'
                                    path='/cadastro'
                                />
                            </ul>
                            <ul className='cards__items'>
                                <CardItem
                                    src='https://static.poder360.com.br/2022/03/russia-848x477-1-848x477.jpg'
                                    text='РУССКИЙ+ com enfoque em Business, Cities & Travel.'
                                    label='Russo'
                                    path='/cadastro'
                                />
                                <CardItem
                                    src='https://media.istockphoto.com/id/1360807875/photo/japanese-state-flag-waving-on-the-wind.jpg?b=1&s=170667a&w=0&k=20&c=otR6F3-V0wXWUDAvCDbWFxU_BCINgN6Z1fdoyQ5D0Ak='
                                    text='日本語+ com enfoque em Business, Cities & Travel.'
                                    label='Japonês'
                                    path='/cadastro'
                                />
                                <CardItem
                                    src='https://img.freepik.com/premium-photo/flag-brazil-outdoors-rio-de-janeiro-brazil_63139-837.jpg?w=2000'
                                    text='Português+ com enfoque em Business, Cities & Travel.'
                                    label='Português-brasileiro'
                                    path='/cadastro'
                                />
                            </ul>
                        </Slide>

                    </div>
                </div>

            </Slide>

        </div>
    );
}

export default Cards;