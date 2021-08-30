import React from "react"

// eslint-disable-next-line
export default props => {

    return (
        <div>
            <span>{props.texto}, </span>
            <span>Número {props.numero}, </span>
            <span>{props.booleano ? "Verdadeiro" : "Falso"}!</span>
        </div>
    )
}