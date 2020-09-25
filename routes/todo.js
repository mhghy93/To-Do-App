const express = require('express');
const toDoController = require('../controllers/todo');
const { toDoValidations, validate } = require('../middleware/validations');
const router = express.Router();

router.get('/all', toDoController.showToDos);

router.get('/inProgress', toDoController.showToDosInProgress);

router.get('/completed', toDoController.showToDosCompleted);

router.post('/create', toDoValidations(), validate, toDoController.createToDo);

router.put('/inProgress/:id', toDoController.moveToDoInProgress);

router.put('/complete/:id', toDoController.completeToDo);

router.put('/edit/:id', toDoValidations(), validate, toDoController.editToDo);

router.delete('/:id', toDoController.deleteToDo);

module.exports = router;
