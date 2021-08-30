import React from "react"

export default function h3 (props) {
    const status = props.nota >= 7 ? "Aprovado" : "Recuperação"
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2>Titulo. {props.titulo}</h2>
            <h3>Subtitulo. {props.subtitulo}</h3>
            <p>Pedro tem nota: {notaInt} e está {status}</p>
        </div>
    )
}