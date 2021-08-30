/* eslint-disable import/no-anonymous-default-export */
import React from "react"

export default props => {

    return (
        <div>
            {React.Children.map(props.children, (filho) => {
                return React.cloneElement(filho, props)
            })}
        </div>
    )
}