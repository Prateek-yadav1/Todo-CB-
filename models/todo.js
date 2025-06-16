const { getDB } = require("../database/database");
const { v4: uuidv4 } = require('uuid');


class Todo{
    static async addTodo(name){
try{
    //creating collection
let todo=await getDB().collection('todo');

const data={
    name,
    id:uuidv4()
};
await todo.insertOne(data);
}
catch(err){
    console.log('Error adding todo:', err);}
    }



static getTodos(){
    return new Promise(async (resolve,reject)=>{
        try{
let todo=await getDB().collection('todo');
let data=await todo.find({}).toArray(); // <-- Fix: use .toArray()
resolve(data);

        }
        catch(err){
reject(err);
        }
    })
}


static deleteTodo(id){
    return new Promise(async (resolve,reject)=>{
        try{
            let todo=await getDB().collection('todo');
            await todo.deleteOne({ id });
            resolve({ message: 'Todo deleted successfully' });
        }
        catch(err){
            reject(err);
        }
    })
}

}

module.exports=Todo;