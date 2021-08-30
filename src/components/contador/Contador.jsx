import React from "react"
import "./Contador.css"

import Display from "./Display"
import Botoes from "./BotoesForm"
import Passos from "./PassosForm"


export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5

    }

    //pra fazer o this funcionar corretamente, chamando a função incrementar()
    /* 1ª forma(mais "complicada")constructor(props) {
        super(props)

        this.incrementar = this.incrementar.bind(this)
    }*/

    //2ª forma transformar a função incrementar em uma arrow function
    //função para incrementar o valor do contador
    //para alterar o estado/valor de numero
    incremento = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })

    }

    decremento = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }



    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>

                <Display numero={this.state.numero} />

                <Passos passo={this.state.passo} setPasso={this.setPasso}/>

                <Botoes setIncremento={this.incremento} setDecremento={this.decremento} />
            </div>
        )
    }
}