import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 30,
  },
});

const ToDoItem = ({ todo }) => {
  const classes = useStyles();

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
            <Button variant="contained">Edit</Button>
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

export default ToDoItem;
