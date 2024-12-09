import React from 'react'
import Todo from './Todo'

function TodoContainer({todos, delTodo}) {
  return (
    <div>
      <div className="task-container">
        {todos.map((todo, index) => {
          return (
            <>
              <Todo todos={todo} index={index} delTodo={delTodo} />
              <br />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default TodoContainer
