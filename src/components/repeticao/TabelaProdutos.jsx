import React from "react"

import "../repeticao/TabelaProdutos.css"
import produtos from "../../data/produtos"

// eslint-disable-next-line
export default props => {

    //jeito do prof

    function getLinhas() {
        return produtos.map(produto => {
            return (
                <tr>
                    <td key={produto.id}>
                        {produto.id}
                    </td>
                    <td >
                        {produto.nome}
                    </td>
                    <td >
                        R${(produto.valor).toFixed(2)}
                    </td>
                </tr>
            )
        })
    }

    /* do meu jeito
        const produtosLi = produtos.map((produto) => {
            return (
                <React.Fragment>
                    <td key={produto.id}>
                        {produto.id}
                    </td>
                    <td key={produto.id}>
                        {produto.nome}
                    </td>
                    <td key={produto.id}>
                        R${(produto.valor).toFixed(2)}
                    </td>
                </React.Fragment>
            )
        })
    */

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}