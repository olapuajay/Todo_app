import React from 'react'

function InputContainer({inputVal, writeTodo, addTodo}) {
  return (
    <div>
      <div className="input-container">
        <input type="text" value={inputVal} onChange={writeTodo} />
        <button onClick={addTodo}> + </button>
      </div>
    </div>
  )
}

export default InputContainer
