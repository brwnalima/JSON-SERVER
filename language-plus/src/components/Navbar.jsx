import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Button } from './Button'

function Navbar() {

    // variável que, quando clicada, faz o useState mudar o estado do icon. Começa como FALSO.
    const [click, setClick] = useState(false)

    const [button, setButton] = useState(true) // constante do btn da navbar


    // function que quando o setClick é usado/clicado, muda o click pra TRUE (! significa contrário do que já estava definido antes, ou seja, como estava falso, se tornou verdadeiro)
    const handleClickIcon = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    // function para saber se o tamanho da tela é maior ou igual 960 (tela grande). caso seja, não vai mostrar o botão. se não for, vai mostrar.
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    // useEffect usado pra que o botão cadastro não apareça quando a page for recarregada, com a tela pequena
    useEffect(() => {
        showButton()
    }, [])

    // evento na tela para sempre que mexer na tela (seguindo a lógica acima), mostrar o botão
    window.addEventListener('resize', showButton)


    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    {/* LOGO */}
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> {/* para quando o logo for clicado, fechar o navbar escondido*/}
                        LANGUAGE+ <i className="fab fa-typo3" />
                    </Link>

                    <div className="menu-icon" onClick={handleClickIcon}>
                        {/* abaixo está um ternário onde se o botão for clicado, muda o icone - foi importado esses icones no index.html*/}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}> {/* para quando um componente dentro do navbar escondido for clicado, fechar o navbar*/}
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sobre' className='nav-links' onClick={closeMobileMenu}>
                                Sobre nós
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cursos' className='nav-links' onClick={closeMobileMenu}>
                                Cursos
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cadastro' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Cadastre-se
                            </Link>
                        </li>
                    </ul>

                    {button && <Button buttonStyle='btn--outline'>CADASTRE-SE</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar