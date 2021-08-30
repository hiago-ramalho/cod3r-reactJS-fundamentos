import React from "react"

// eslint-disable-next-line
export default props => {

    return (
        <div className="Passo">
            <label htmlFor="passoInput">Passo</label>
            <input
                type="text"
                id="passoInput"
                value={props.passo}
                // eslint-disable-next-line
                onChange={evento => props.setPasso(+evento.target.value)} />

        </div>
    )
}