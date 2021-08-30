import React from "react"
import alunos from "../../data/alunos"

// eslint-disable-next-line
export default props => {

    const alunosLi = alunos.map((aluno) => {
        return (
        <li key={aluno.id}> 
            {aluno.id} - {aluno.nome}, Nota: {aluno.nota} 
        </li>)
    })


    return (
        <div>
            <ul style={{ listStyle: "none"}}>
                {alunosLi}
            </ul>
        </div>
    )
}
//porque é importante usar "key" ?
// pq a partir da chave o react será capaz de detectar as eventuais mudanças que podem acontecer
//é importante que essa "key" seja única