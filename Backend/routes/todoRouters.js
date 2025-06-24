const express= require('express');
const todoroute = express.Router()

const { getTodo, postTodo, putTodo, deleteTodo,getTodoById } = require('../controller/todoController');

todoroute.get('/get', getTodo)
todoroute.get('/get/:id', getTodoById)
todoroute.post('/post', postTodo)
todoroute.put('/put/:id', putTodo)
todoroute.delete('/delete/:id', deleteTodo)

module.exports = todoroute;

