const { v4: uuidv4 } = require('uuid');

// let todos=[
  
// ];
const Todo=require('../database/script/database');

module.exports.getGetTodos=(req,res,next)=>{
// res.send(todos);
Todo.getTodos()
.then((data)=>{
    res.send(data);
})
.catch((err)=>{
    res.send(`Unable to fetch todos,${err.message}`);
})
}
module.exports.postAddTodo=(req,res,next)=>{
const {name}=req.body;
Todo.addTodo(name)
.then((msg)=>{
    console.log(msg);
    res.redirect('/gettodos');//redirect sends a get request to the given path
})
.catch((err)=>{
    res.send(`Unable to add todo,${err.message}`);})

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
    const { id } = req.body;
    Todo.deleteTodo(id)
        .then((msg) => {
            console.log(msg);
            res.redirect('/gettodos'); // redirect sends a get request to the given path
        })
        .catch((err) => {
            res.send(`Unable to delete todo,${err.message}`);
        });
}