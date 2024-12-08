import React from 'react'
import Todo from './Todo'

function TodoContainer({todos}) {
  return (
    <div>
      <div className="task-container">
        {todos.map((todo) => {
          return (
            <>
              <Todo todos={todo} />
              <br />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default TodoContainer
