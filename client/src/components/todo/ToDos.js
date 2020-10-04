import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToDoCard from './ToDoCard';
import ToDoContext from '../../context/todo/ToDoContext';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Todos = () => {
  const classes = useStyles();

  const todoContext = useContext(ToDoContext);

  const {
    todosRemaining,
    todosInProgress,
    todosCompleted,
    showToDosRemaining,
    showToDosInProgress,
    showToDosCompleted,
  } = todoContext;

  useEffect(() => {
    showToDosRemaining();
    showToDosInProgress();
    showToDosCompleted();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <ToDoCard cardType="ToDos Remaining" todos={todosRemaining} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ToDoCard cardType="ToDos In Progress" todos={todosInProgress} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ToDoCard cardType="ToDos Completed" todos={todosCompleted} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Todos;
