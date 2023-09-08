import express from 'express';
const app = express();
import mongoose from 'mongoose';
import cors from 'cors'
import Todo from "./models/Todo.js";
mongoose.connect('mongodb://127.0.0.1:27017/Todo',{useNewUrlParser:true})
    .then(()=>{
        console.log("connection");
    })
    .catch(err=>{
        console.log("error");
        console.log(err);
    })
const db = mongoose.connection;
db.on('error', console.error.bind(console,"connection error:"));
db.once('open',()=>{
    console.log("Database connnected");
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
// const categories = ['Homework', 'Reading', 'Test'];

app.get('/', async (req, res)=>{

    const todos = await Todo.find({});
    res.send(todos);
    })
app.post('/', async(req,res)=>{
    const todo = new Todo(req.body);
    await todo.save();
    res.send("Successfully added todo");
})
app.delete('/:id', async (req,res)=>{
    const { id } = req.params;
    const todo = await Todo.findOneAndDelete({id:id});
    res.send("Successfully deleted todo")
})

app.put('/:id', async (req,res)=>{
    const { id } = req.params;
    const {comp} = req.body;
    const todo = await Todo.findOneAndUpdate({id:id},{completed:comp});
    res.send("Successfully updated todo")
})
app.listen(3000, ()=>{
    console.log('listening');
})