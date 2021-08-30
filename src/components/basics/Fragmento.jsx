import React from "react"

export default function Fragmento(props) {
    return (
//ou para usar React Fragments podemos usar somente <> </>
//usamos o React.Fragment quando quisermos adicionar mais de um elemento e não quisermos envolvê-los por uma <div> por exemplo
        <React.Fragment> 
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
    )
}