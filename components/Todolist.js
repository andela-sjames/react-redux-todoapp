import React, {PropType} from 'react'
import Todo from './Todo'

const Todolist = ({todos, onTodoClick}) => (
    <ul>
        {todos.map(todo => 
            <Todo 
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropType.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList