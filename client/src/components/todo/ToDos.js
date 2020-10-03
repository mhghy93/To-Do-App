import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToDoCard from './ToDoCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Todos = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <ToDoCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ToDoCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ToDoCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Todos;
