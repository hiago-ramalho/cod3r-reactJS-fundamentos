import React, { useState } from "react"

import "./Mega.css"

// eslint-disable-next-line
export default props => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min) + min)
    
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
    }
    
    function gerarNumeros (quantidade) {
        const numeros = Array(quantidade).fill(0).reduce(nums => {
            const novoNumero = gerarNumeroNaoContido(1, 61, nums)
            return [...nums, novoNumero]
        }, []).sort((n1, n2) => n1 - n2)
    
        return numeros
    }

    const [quantidade, setQuantidade] = useState(props.quantidade || 6)
    const numerosIniciais = Array(quantidade).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)
    
    

    return (
        <div className="Mega">

            <h2>Desafio Megasena</h2>

            <h3>{numeros.join(" ")}</h3>

            <div>
                <label>Quantidade de Números: </label>
                <input type="number" value={quantidade} 
                onChange={evento => setQuantidade(+evento.target.value)}/>
            </div>

            <button onClick={_ => setNumeros(gerarNumeros(quantidade))}>Gerar Números</button>

        </div>
    )
}