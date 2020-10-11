import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ToDoContext from '../../context/todo/ToDoContext';

const DeleteToDo = ({ open, handleClose, todoItem }) => {
  const todoContext = useContext(ToDoContext);

  const { deleteToDo } = todoContext;

  const handleDeleteToDo = (e) => {
    e.preventDefault();
    deleteToDo(todoItem._id);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Delete ToDo</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure, you want to delete this?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDeleteToDo} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteToDo.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  todoItem: PropTypes.object.isRequired,
};

export default DeleteToDo;
