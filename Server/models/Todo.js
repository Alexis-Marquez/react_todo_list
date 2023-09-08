import mongoose from "mongoose";

const {Schema} = mongoose;

const todoSchema = new Schema({
    text:{
        type:String,
        required: [true, 'Todo must have text']
    },
    description: {
        type: String
    },
    completed:{
        type: Boolean
    },
    id:{
        type: String
    }
    // products: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Product'
    //     }
    // ]
})
const Todo = mongoose.model('Todo', todoSchema);

export default Todo;