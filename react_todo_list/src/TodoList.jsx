import List from '@mui/material/List';
import {useState} from "react";

import TodoItem from "./TodoItem.jsx";

const initial = [
    {id:1, text: "go to store", completed:true},
    {id:2, text: "go to store", completed:false}
];
export default function TodoList(){
    const [Todos, setTodos] = useState(initial);

    const removeTodo = (id) =>{
        setTodos(prevTodos =>{
            return prevTodos.filter((t)=> t.id!==id);
        })
    }

    return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {Todos.map((todo) =>( //implicit return
            <TodoItem todo={todo} key={todo.id} remove={removeTodo}/>
    ))}
    </List>
    )}
