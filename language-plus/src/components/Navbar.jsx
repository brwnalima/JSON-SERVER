import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

    // variável que, quando clicada, faz o useState mudar o estado do icon. Começa como FALSO.
    const [click, setClick] = useState(false)

    // function que quando o setClick é usado/clicado, muda o click pra TRUE (! significa contrário do que já estava definido antes, ou seja, como estava falso, se tornou verdadeiro)
    const handleClickIcon = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    {/* LOGO */}
                    <Link to="/" className="navbar-logo">
                        Language+ <i className="fab fa-typo3" />
                    </Link>

                    <div className="menu-icon" onClick={handleClickIcon}>
                        {/* abaixo está um ternário onde se o botão for clicado, muda o icone - foi importado esses icones no index.html*/}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
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

                </div>
            </nav>
        </>
    )
}

export default Navbar