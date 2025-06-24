const todo = require('../models/todoModels'); 

exports.getTodo = async (req, res) => {
    const todoData = await todo.find();
    res.status(200).json({ data: todoData });
};

exports.getTodoById = async (req, res) => {
    const todoData = await todo.findById(req.params.id);
    res.status(200).json({ todoData });
};

exports.postTodo = async (req, res) => {
    const { task, status } = req.body;
    const exist = await todo.findOne({ task, status }); 
    if (exist) return res.status(409).json({ message: 'Todo already exists' });

    const newTodo = new todo({ task, status }); 
    await newTodo.save()
    res.status(201).json({ todo: newTodo });
};

exports.putTodo = async (req, res) => {
    const update = await todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!update) return res.status(404).json({ message: 'Todo not found' });

    res.status(200).json({ updated: update });
};

exports.deleteTodo = async (req, res) => {
    const deleted = await todo.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Todo not found' });

    res.status(200).json({ message: 'Todo deleted', deleted });
};
