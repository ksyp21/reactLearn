import React from 'react'

const Button = (props) => {
    // const title = props.title
    const { title } = props //object destructuring
    const { color } = props
    return (
        <div>
            <button style={{ height: "50px", width: "100px", backgroundColor: color }}>{title}</button>
        </div>
    )
}

export default Button