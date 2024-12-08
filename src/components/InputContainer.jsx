import React from 'react'

function InputContainer({inputVal, writeTodo}) {
  return (
    <div>
      <div className="input-container">
        <input type="text" value={inputVal} onChange={writeTodo} />
        <button> + </button>
      </div>
    </div>
  )
}

export default InputContainer
