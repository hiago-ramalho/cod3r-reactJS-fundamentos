
import "./App.css"

import React from "react"

import Card from "./Card"

import Primeiro from "../basics/Primeiro"
import Terceiro from "../basics/ComParametro"
import Fragmeto from "../basics/Fragmento"
import Aleatorio from "../basics/Aleatorio"
import Familia from "../basics/Familia"
import FamiliaMembros from "../basics/FamiliaMembros"
import ListaAlunos from "../repeticao/ListaAlunos"
import TabelaProdutos from "../repeticao/TabelaProdutos"
import ParOuImpar from "../condicional/ParOuImpar"
import UsuarioInfo from "../condicional/UsuarioInfo"
import DiretaPai from "../comunicacao/DiretaPai"
import IndiretaPai from "../comunicacao/IndiretaPai"
import Input from "../formulario/Input"
import Contador from "../contador/Contador"
import Mega from "../mega/Mega"

// eslint-disable-next-line
export default props => {
    return (
        <div className="App">
            <h1>Fundamentos de React</h1>

            <div className="Cards">

                <Card titulo="#13 - Desafio Megasena" color="#1e2240">
                    <Mega></Mega>
                </Card>

                <Card titulo="#12 - Contador" color="#748a9e">
                    <Contador numeroInicial={10}> </Contador>
                </Card>

                <Card titulo="#11 - Componente Controlado" color="#946656">
                    <Input></Input>
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#cc0000">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#09 - Comunicação Direta" color="#5e3c58">
                    <DiretaPai/>
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#c1b5ed">
                    <ParOuImpar numero={21}> </ParOuImpar>

                    <UsuarioInfo usuario={{nome: "Hiago"}} ></UsuarioInfo>
                    <UsuarioInfo usuario={{nome: ""}} ></UsuarioInfo>
                </Card>

                <Card titulo="#07 - Desafio Produtos" color="#6e7c63">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição" color="#ff6633">
                    <Familia sobrenome="Ferreira">
                        <ListaAlunos></ListaAlunos>
                    </Familia>
                </Card>
                
                <Card titulo="#05 - Componente com Filhos" color="#ffcece">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembros nome="Pedro" />
                        <FamiliaMembros nome="João" />
                        <FamiliaMembros nome="Miguel" />

                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#93f0f2">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#42a9db">
                    <Fragmeto />
                </Card>

                <Card titulo="#02 - Com Parametro" color="#6af998">
                    <Terceiro titulo="Primeiro Atributo" subtitulo="Segundo Atributo" nota={7.7} />
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#f6dd75">
                    <Primeiro />
                </Card>

            </div>

        </div>
    )
}

