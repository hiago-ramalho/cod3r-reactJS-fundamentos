import React from "react"

// eslint-disable-next-line
export default props => {

    return (
        <div>
            <button onClick={props.setIncremento}>+</button>
            <button onClick={props.setDecremento}>-</button>
        </div>

    )
}