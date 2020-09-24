const express = require('express');
const toDoController = require('../controllers/todo');
const { toDoValidations, validate } = require('../middleware/validations');
const router = express.Router();

router.get('/all', toDoController.showToDos);

router.get('/inProgress', toDoController.showToDosInProgress);

router.get('/completed', toDoController.showToDosCompleted);

router.post('/create', toDoValidations(), validate, toDoController.createToDo);

router.put('/:id', toDoController.editToDo);

router.delete('/:id', toDoController.deleteToDo);

module.exports = router;
