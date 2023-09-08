import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CssBaseline from "@mui/material/CssBaseline"
import './App.css'
import TodoList from "./TodoList.jsx";
import Navbar from "./Navbar.jsx";
import {NavigateBefore} from "@mui/icons-material";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <CssBaseline/>
        <Navbar/>
        <TodoList/>
   </>
  )
}

export default App
