const ToDo = require('../models/todo');

exports.showToDos = (req, res) => {};

exports.showToDosInProgress = (req, res) => {};

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
