import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditToDo from './EditToDo';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 30,
  },
});

const ToDoItem = ({ todo }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" component="div">
              {todo.title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button variant="contained" onClick={handleClickOpen}>
              Edit
            </Button>
            <EditToDo open={open} handleClose={handleClose} todoItem={todo} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button variant="contained" color="secondary">
              Delete
            </Button>
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
