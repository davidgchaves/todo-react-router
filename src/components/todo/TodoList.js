import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ handleToggle, handleRemove, todos }) => (
  <div className="Todo-List">
    <ul>
      {todos.map(todo =>
        <TodoItem key={todo.id}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
          {...todo} />
      )}
    </ul>
  </div>
)

const { array, func } = React.PropTypes
TodoList.propTypes = {
  handleToggle: func.isRequired,
  handleRemove: func.isRequired,
  todos: array.isRequired
}
