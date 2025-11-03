// CSS | inline e em outro diretorio

import React from 'react'
 
import './StylesExamples.css'

// modules css
import styles from "./StylesExamples.module.css"

const StylesExamples = () => {

    // inline opcao 1 | evitar
    const inlineStyles = {
        color: "red",
        fontSize:"30px",
    };

    return (
    <div>
        <h2 style={inlineStyles}>inline css</h2>

        <p className='text'>TESTE CSS EM OUTRO DIRETORIO</p>

        <p className={styles.textPurple}>TESTE CSS EM MODULES</p>
    </div>
  )
}

export default StylesExamples
