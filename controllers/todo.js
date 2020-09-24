const ToDo = require('../models/todo');

exports.showToDos = async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.moveToDoInProgress = async (req, res) => {
  try {
    const todo = await ToDo.findById(req.params.id);
    todo.inProgress = true;
    todo.inProgressAt = new Date();
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.completeToDo = async (req, res) => {
  try {
    const todo = await ToDo.findById(req.params.id);
    todo.inProgress = false;
    todo.isCompleted = true;
    todo.completedAt = new Date();
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.showToDosInProgress = async (req, res) => {
  try {
    const todos = await ToDo.find({ inProgress: true });
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.showToDosCompleted = (req, res) => {};

exports.createToDo = async (req, res) => {
  try {
    const { title } = req.body;

    const toDo = new ToDo({ title });

    await toDo.save();

    res.json(toDo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.editToDo = (req, res) => {};

exports.deleteToDo = (req, res) => {};
