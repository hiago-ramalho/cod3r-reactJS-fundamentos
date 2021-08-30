import React, { useState } from "react" 
import "./Input.css"


// eslint-disable-next-line
export default props => {

    const [valor, setValor] = useState("Inicial")

    function quandoMudar(evento) {
        setValor(evento.target.value)
        
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>

            <div>
                <input value={valor} onChange={quandoMudar} type="text"/> {/*componente controlado */}
                <input value={valor} readOnly type="text"/> {/*componente somente de leitura */}
                <input value={undefined} type="text"/> {/*componente não controlado, não está associado a nenhum estado */}
            </div>
        </div>
    )
}