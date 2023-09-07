import ListItem from "@mui/material/ListItem";
import TextField from '@mui/material/TextField'
import {useState} from "react";
import {InputAdornment} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Create from '@mui/icons-material/create'

export default function TodoForm({addTodo}){
    const [text, setText] = useState("");
    const handleChange = (evt) =>{
        setText(evt.target.value);
    }

    const handleSubmit = (evt)=>{
        evt.preventDefault(); //prevent refresh on submit of form.
        addTodo(text);
        setText("");
    };

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Add todo" variant="outlined" onChange={handleChange} value={text}
            InputProps={{
            endAdornment:
            <InputAdornment position="end">
                <IconButton
                    aria-label="Create todo"
                    edge="end"
                    type="submit"
                >
                    <Create/>
                </IconButton>
            </InputAdornment>
        }}
            />
            </form>
        </ListItem>

    )
}