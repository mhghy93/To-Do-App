import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditToDo from './EditToDo';
import DeleteToDo from './DeleteToDo';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 30,
  },
  dateColor: {
    color: '#757575',
  },
});

const ToDoItem = ({ todo }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

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
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button variant="contained" onClick={handleClickOpen}>
              Edit
            </Button>
            <EditToDo open={open} handleClose={handleClose} todoItem={todo} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDeleteOpen}
            >
              Delete
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
