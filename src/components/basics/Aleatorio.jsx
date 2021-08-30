

/* do meu jeito 
export default () => {
    const aleatorio = Math.floor(Math.random() * 101)

    return aleatorio
} */

// jeito do professor 

import React from "react"

/* eslint-disable import/no-anonymous-default-export */
export default (props) => {
    //const min = props.min
    //const max = props.max
    //as duas constantes acima só que usando destructuring
    const { min, max } = props

    const aleatorio = parseInt(Math.random() * (max - min) + min)

    return (
        <React.Fragment>
            <h2>Valor Aleatório</h2>
            <p>Valor Mínimo : {min} </p>
            <p>Valor Máximo : {max} </p>
            <p>Valor Selecionado : {aleatorio}</p>
        </React.Fragment>
    );
}