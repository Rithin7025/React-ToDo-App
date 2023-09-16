import React, { useState } from "react"

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = (e) => {
    e.preventDefault()

    editTodo(value, task.id)

    setValue("")
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update task
      </button>
    </form>
  )
}
