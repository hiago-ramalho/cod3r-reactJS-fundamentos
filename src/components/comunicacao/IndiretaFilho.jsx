import React from "react"

// eslint-disable-next-line
export default props => {

    const click = props.quandoClicar

    const gerarIdade = () => parseInt(Math.random() * 100)

    return (
        <div>

            <div>Filho</div>
            <button onClick={
                function (evento) {
                    click("Hiago", gerarIdade(), true)
                }
            }>Fornecer Informações</button>

        </div>
    )
}