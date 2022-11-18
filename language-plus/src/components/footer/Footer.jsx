import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button/Button'
import './Footer.css'


function Footer() {
    return (
        <div className='footer-container'>

            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <p className="footer-subscription-text">
                    Lorem ipsum dolor sit amet consectet.
                </p>

                <div className="input-areas">
                    <form>
                        <input type="email" name='email' placeholder='Seu E-mail' className="footer-input" />
                        <Button buttonStyle='btn--outline'>Inscreva-se</Button>
                    </form>
                </div>
            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Cursos</h2>
                        <Link to='/cursos'>Curso de Espanhol</Link>
                        <Link to='/cursos'>Curso de Francês</Link>
                        <Link to='/cursos'>Curso de Inglês</Link>
                    </div>
                </div>
                
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Institucional</h2>
                        <Link to='/sobrenos'>Sobre Nós</Link>
                        <Link to='/'>Parcerias</Link>
                        <Link to='/'>Política de Privacidade</Link>
                       
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contatos</h2>
                        <Link to='/'>Av. Prof. Pereira Reis, 76 - Santo Cristo, Rio de Janeiro - RJ, 20220-800/POMAR</Link>
                        <Link to='/'>central@languageplus.com.br</Link>
                    </div>
                </div>
            </div>

            {/* PARTE DAS REDES SOCIAIS */}
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                           LANGUAGE+ <i class='fab fa-typo3' />
                        </Link>
                    </div>
                    <small class='website-rights'>LANGUAGE+ © 2022</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default Footer
