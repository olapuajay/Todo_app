import React from 'react'

function TodoContainer() {
  return (
    <div>
      <div className="task-container">
        <div className="task">
          <p> Go to the class </p>
          <div className="actions">
            <input type="checkbox" />
            <button> Delete </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoContainer
