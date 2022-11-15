import React from "react"
import './Button.css'
import { Link } from "react-router-dom"


// estilo para o botão primário (fundo branco) e btn outline (sem fundo, e com borda)
const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize }) => {

    // as variáveis abaixo checam se o botão tem um estilo ou tamanho definido, se não tiver automaticamante o primeiro estilo dos arrays STYLES e SIZES 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/cadastro' className="btn-mobile">
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>

                {children}

            </button>
        </Link>
    )
}
