import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ToDoContext from '../../context/todo/ToDoContext';

const EditToDo = ({ open, handleClose, todoItem }) => {
  const todoContext = useContext(ToDoContext);

  const { editToDo } = todoContext;

  const [todo, setTodo] = useState({
    title: todoItem.title,
  });

  const { title } = todo;

  const onChange = (e) => setTodo({ ...todo, [e.target.name]: e.target.value });

  const handleEditToDo = (e) => {
    e.preventDefault();
    editToDo(todoItem._id, todo);
    setTodo('');
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Edit ToDo</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          name="title"
          label="Title"
          type="text"
          fullWidth
          onChange={onChange}
          value={title || ''}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleEditToDo} color="primary">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

EditToDo.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  todoItem: PropTypes.object.isRequired,
};

export default EditToDo;
