import { useState } from 'react'
import './App.css'
import InputContainer from './components/InputContainer'
import TodoContainer from './components/TodoContainer'

function App() {
  const [inputVal, setInputVal] = useState('')
  function writeTodo(e) {
    console.log(e.target.value)
  }

  return (
    <main>
      <h1>To-Do App</h1>
      <InputContainer inputVal={inputVal} writeTodo={writeTodo} />
      <hr />
      <TodoContainer />
    </main>
  )
}

export default App
