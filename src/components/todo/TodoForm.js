import React from 'react'

export const TodoForm = ({ handleInputChange, handleSubmit, todo }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleInputChange} value={todo} />
  </form>
)

const { func, string } = React.PropTypes
TodoForm.propTypes = {
  handleInputChange: func.isRequired,
  handleSubmit: func.isRequired,
  todo: string.isRequired
}
