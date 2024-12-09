import React from 'react'

function Todo({todos, delTodo, index}) {
  return (
    <div>
      <div className="task">
          <p> {todos} </p>
          <div className="actions">
            <input type="checkbox" />
            <button onClick={() => delTodo(index)}> Delete </button>
          </div>
        </div>
    </div>
  )
}

export default Todo
