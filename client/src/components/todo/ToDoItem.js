import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import DoneIcon from '@material-ui/icons/Done';
import EditToDo from './EditToDo';
import DeleteToDo from './DeleteToDo';
import ToDoContext from '../../context/todo/ToDoContext';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 30,
  },
  dateColor: {
    color: '#757575',
  },
  startTaskColor: {
    color: '#283593',
  },
  completeTaskColor: {
    color: '#009688',
  },
});

const ToDoItem = ({ todo }) => {
  const classes = useStyles();

  const todoContext = useContext(ToDoContext);

  const { moveToDoInProgress, completeToDo } = todoContext;

  const [open, setOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleMoveTodoInProgress = (e) => {
    e.preventDefault();
    moveToDoInProgress(todo._id);
  };

  const handleCompleteTodo = (e) => {
    e.preventDefault();
    completeToDo(todo._id);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" component="div">
              {todo.title}
            </Typography>
            <Typography
              className={classes.dateColor}
              variant="body2"
              component="div"
            >
              Created on {new Date(todo.createdAt).toLocaleDateString()}
            </Typography>
            {todo.inProgressAt && (
              <Typography
                className={classes.dateColor}
                variant="body2"
                component="div"
              >
                In Progress
                {new Date(todo.inProgressAt).toLocaleDateString()}
              </Typography>
            )}
            {todo.completedAt && (
              <Typography
                className={classes.dateColor}
                variant="body2"
                component="div"
              >
                Completed
                {new Date(todo.completedAt).toLocaleDateString()}
              </Typography>
            )}
            {!todo.inProgress && !todo.isCompleted && (
              <Button
                className={classes.startTaskColor}
                onClick={handleMoveTodoInProgress}
              >
                <KeyboardArrowRightIcon /> Start Task
              </Button>
            )}

            {!todo.isCompleted && (
              <Button
                className={classes.completeTaskColor}
                onClick={handleCompleteTodo}
              >
                <DoneIcon /> Complete Task
              </Button>
            )}
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button color="primary" onClick={handleClickOpen}>
              <EditIcon />
            </Button>
            <EditToDo open={open} handleClose={handleClose} todoItem={todo} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button color="secondary" onClick={handleDeleteOpen}>
              <DeleteIcon />
            </Button>
            <DeleteToDo
              open={deleteOpen}
              handleClose={handleDeleteClose}
              todoItem={todo}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default ToDoItem;
