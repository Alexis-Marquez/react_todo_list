import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CssBaseline from "@mui/material/CssBaseline"
import './App.css'
import TodoList from "./TodoList.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <CssBaseline/>
        <h1>To Do</h1>
        <TodoList/>
   </>
  )
}

export default App
