import Todo from '../models/todo.js';

module.exports = {
    index,
    create,
}

async function index(req, res) {
    const todos = await Todo.find({}).exec()
    res.json(todos)
}

async function create(req, res) {
    const todo = new Todo(req.body)
    todo.save()
}