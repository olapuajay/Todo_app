import React from 'react'

function Todo({todos}) {
  return (
    <div>
      <div className="task">
          <p> {todos} </p>
          <div className="actions">
            <input type="checkbox" />
            <button> Delete </button>
          </div>
        </div>
    </div>
  )
}

export default Todo
