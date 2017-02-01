import React, {PropType} from 'react';

const Todo = ({onClick, completed, text}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed? 'line-through': 'none'
        }}
    >
        {text}
    </li>
)

Todo.PropType = {
    onClick: PropType.func.isRequired,
    text: PropType.string.isRequired,
    completed: PropType.bool.isRequired
}

export default Todo