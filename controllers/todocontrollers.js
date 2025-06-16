const { v4: uuidv4 } = require('uuid');
const Todo = require('../models/todo');

// let todos=[
  
// ];
// const Todo=require('../database/script/database');

module.exports.getGetTodos=async (req,res,next)=>{
try{
let data=await Todo.getTodos();
console.log('todos requesteed are:',data);
        res.json(data); }
catch(err){
next(err);
}
}
module.exports.postAddTodo=(req,res)=>{
//this is responsible to add a new task to the database 
const { name } = req.body; // Extracting the name from the request body
Todo.addTodo(name)
    .then((msg) => {
        console.log('Todo added successfully:', msg);
res.redirect('/gettodos'); // Redirecting to the getTodos route        
          })
    .catch(err => {
        res.send('Error adding todo:', err);
    });
}


// module.exports.postAddTodo=(req,res,next)=>{
// const {name}=req.body;
// todos.push({
//     id:uuidv4(),
//    name
// })
// res.redirect('/gettodos');//redirect sends a get request to the given path
// }

module.exports.postDeleteTodo = (req, res, next) => {
const { id } = req.body; // Extracting the id from the request body
Todo.deleteTodo(id)
    .then((msg) => {
        console.log('Todo deleted successfully',msg);
        res.redirect('/gettodos'); // Redirecting to the getTodos route
    })
    .catch(err => {
        console.error('Error deleting todo:', err);
        res.status(500).send('Error deleting todo');
    });
}