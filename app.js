const express = require('express');
const path = require('path');
const { mongoConnect } = require('./database/database');
const app=express();
const PORT=5555;


app.use(express.urlencoded({extended:true}));
app.use(express.json());//to parse json data from client
app.use(express.static(path.join(__dirname,'public')));//to send all static files to client



app.use('/',require('./routes/todo'));

mongoConnect()
.then(()=>{
    app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})
})
.catch((err)=>{
    console.log('Error connecting to database:', err);
});