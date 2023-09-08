import List from '@mui/material/List';
import {useEffect, useState} from "react";

import TodoItem from "./TodoItem.jsx";
import TodoForm from "./TodoForm.jsx";
import {Box, Typography} from "@mui/material"
import axios from "axios";

export default function TodoList(){
    const [Todos, setTodos] = useState([]);
    const getInitialToDo = async () =>{
        const res = axios.get("http://localhost:3000/").then(function (response)
        {
            setTodos(response.data);
        }).catch (function (e){
            console.log(e);
        })
    }
    useEffect(() => {
        getInitialToDo().then
        (console.log("success"));
    }, []);
    const removeTodo = async (id) =>{
        setTodos(prevTodos =>{
            return prevTodos.filter((t)=> t.id!==id);
        });
        axios.delete("http://localhost:3000/"+id).then
        (()=>{
            console.log("Successfully deleted");
        })
    }

    const addTodo = async (text) =>{
        const todo = {text:text, id:crypto.randomUUID(),completed:false};
        setTodos(prevTodos =>{
            return [...prevTodos,todo]
        });
        axios.post("http://localhost:3000/", {text:text, id:crypto.randomUUID(),completed:false}).then
        (()=>{
            console.log("Successfully added");
        })
    };

    const toggleTodo = async (id) =>{
        let comp;
        setTodos(prevTodos =>{
            return prevTodos.map(todo =>{
                if(todo.id===id){
                    comp = !todo.completed;
                    return {...todo, completed: comp}
                }
                else{
                    return todo;
                }
            })
        })
        axios.put("http://localhost:3000/"+id,{comp:comp}).then
        (()=>{
            console.log("Successfully updated");
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
