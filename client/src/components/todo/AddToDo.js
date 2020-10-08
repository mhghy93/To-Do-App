import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ToDoContext from '../../context/todo/ToDoContext';

const AddToDo = ({ open, handleClose }) => {
  const todoContext = useContext(ToDoContext);

  const { createToDo } = todoContext;

  const [todo, setTodo] = useState({
    title: '',
  });

  const { title } = todo;

  const onChange = (e) => setTodo({ ...todo, [e.target.name]: e.target.value });

  const handleAddToDo = (e) => {
    e.preventDefault();
    createToDo(todo);
    handleClose();
    console.log('a', e);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Create ToDo</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          onChange={onChange}
          value={title}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddToDo} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddToDo.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddToDo;
