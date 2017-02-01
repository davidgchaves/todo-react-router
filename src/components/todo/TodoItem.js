import React from 'react'
import { partial } from '../../lib/utils'

export const TodoItem = ({ handleToggle, handleRemove, id, isComplete, name }) => {
  const handleToggleOnChange = partial(handleToggle, id)
  const handleRemoveOnClick = partial(handleRemove, id)
  return (
    <li>
      <span className="delete-item"><a href="#" onClick={handleRemoveOnClick}>X</a></span>
      <input type="checkbox" onChange={handleToggleOnChange} checked={isComplete} />
      {name}
    </li>
  )
}

const { bool, func, number, string } = React.PropTypes
TodoItem.proTypes = {
  handleToggle: func.isRequired,
  handleRemove: func.isRequired,
  id: number.isRequired,
  isComplete: bool.isRequired,
  name: string.isRequired
}
