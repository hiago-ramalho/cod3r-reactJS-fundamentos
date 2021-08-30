import React from "react"
import If, {Else} from "./If"

// eslint-disable-next-line
export default props => {
    const usuario = props.usuario || {}

    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja Bem-vindo(a) <strong>{usuario.nome}</strong>!
                <Else>
                Seja Bem-vindo(a)!
                </Else>
            </If>
        </div>
    )
}