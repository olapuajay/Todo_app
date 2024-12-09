import { useState } from 'react'
import './App.css'
import InputContainer from './components/InputContainer'
import TodoContainer from './components/TodoContainer'

function App() {
  const [inputVal, setInputVal] = useState('')
  const [todos, setTodos] = useState([])

  function writeTodo(e) {
    setInputVal(e.target.value)
  }

  function addTodo() {
    if(inputVal != '') {
      setTodos((prevTodos) => [...prevTodos, inputVal])
      setInputVal('')
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) => prevTodos.filter((_prevTodos, prevTodosIndex) => {
      return prevTodosIndex != todoIndex
    }))
  }

  return (
    <main>
      <h1>To-Do App</h1>
      <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
      <hr />
      <TodoContainer todos={todos} delTodo={delTodo} />
    </main>
  )
}

export default App
