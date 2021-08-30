import React, { useState } from "react"
//a partir do useState conseguimos criar um estado dentro do componente
import IndiretaFilho from "./IndiretaFilho"

// eslint-disable-next-line
export default props => {

//useState já é incluso na aula de Componente com Estado
    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    //useState retorn um array com 2 posições, o valor em si e uma função que será usada pra alterar esse valor

    //nome idade nerd
    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd ? "Verdadeiro" : "False")
        
    }

    return (
        <div>
            <div>Pai</div>
            <span>{nome}, </span>
            <span><strong>{idade}</strong>, </span>
            <span>{nerd}</span>

            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}