import React from "react"
import DiretaFilho from "./DiretaFilho"

// eslint-disable-next-line
export default props => {

    return (
        <div>

            <DiretaFilho texto="Filho 1" numero={20} booleano={true}></DiretaFilho>
            <DiretaFilho texto="Filho 2" numero={17} booleano={false}></DiretaFilho>
            <DiretaFilho texto="Filho 3" numero={7} booleano={true}></DiretaFilho>
            <DiretaFilho texto="Filho 4" numero={20} booleano={false}></DiretaFilho>

        </div>
    )
}