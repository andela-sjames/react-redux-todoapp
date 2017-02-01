import React, {PropTypes} from 'react'

const Link = ({ active, children, onClick }) => {

    if (active) {
        return <span>{ children }</span>
    }

    return (
        <a href="#"
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </a>
    )
}

link.PropTypes = {
    active: PropType.bool.isRequired,
    children: PropType.node.isRequired,
    onClick: PropType.func.isRequired
}


export default Link