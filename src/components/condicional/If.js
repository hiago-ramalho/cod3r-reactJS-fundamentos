//criar um componente,ter uma propriedade "teste" onde terá uma expressã que poderá ser v ou f
// se for V o que estiver dentro será exibido, se for F nada será exibido

/*

    <If teste={exp}>
        <span>...</span>
        <span>...</span>
        <span>...</span>
    </If>

*/


// eslint-disable-next-line
export default props => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === "Else"
    })[0]

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if(props.test) {
        return ifChildren
    } else if (elseChild){
        return elseChild
    } else {
        return false
    }


}

export const Else = props => props.children