import List from '@mui/material/List';
import {useState, useEffect} from "react";

import TodoItem from "./TodoItem.jsx";
import TodoForm from "./TodoForm.jsx";
import {Box, Typography} from "@mui/material"

const getInitial = ()=>
{const data = JSON.parse(localStorage.getItem("todos"))
if(!data){
    return [];
}
return data;};

export default function TodoList(){
    const [Todos, setTodos] = useState(getInitial);

    useEffect(()=>{
    localStorage.setItem(
        'todos', JSON.stringify(Todos)
    );
    }, [Todos])//when todos array changes effect will run
    const removeTodo = (id) =>{
        setTodos(prevTodos =>{
            return prevTodos.filter((t)=> t.id!==id);
        })
    }

    const addTodo = (text) =>{
        setTodos(prevTodos =>{
            return [...prevTodos,{text:text, id:crypto.randomUUID(),completed:false}]
        });
    };

    const toggleTodo = (id) =>{
        setTodos(prevTodos =>{
            return prevTodos.map(todo =>{
                if(todo.id===id){
                    return {...todo, completed: !todo.completed}
                }
                else{
                    return todo;
                }
            })
        })
    }

    return (
        <Box sx={{display:'flex', alignItems:'center', flexDirection:"column", m:3 }}>
            <Typography variant="h2" component="h2" sx={{flexGrow:1}}>
                Today's Tasks
            </Typography>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {Todos.map((todo) =>( //implicit return
            <TodoItem todo={todo} key={todo.id} remove={removeTodo} toggle={()=> toggleTodo(todo.id)}/>
    ))}
        <TodoForm addTodo={addTodo}/>
    </List>
        </Box>
    )}
