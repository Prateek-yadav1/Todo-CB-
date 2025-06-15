const path = require('path');   
const express = require('express');
const router = express.Router();
const todoControllers = require('../controllers/todocontrollers');

router.get('/gettodos',todoControllers.getGetTodos);

router.post('/addtodo',todoControllers.postAddTodo);

router.post('/deletetodo',todoControllers.postDeleteTodo);

module.exports = router;