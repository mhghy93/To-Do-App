import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ToDoItem from './ToDoItem';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: '#f2f2f2',
  },
});

const ToDoCard = ({ cardType, todos }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {cardType}
          </Typography>
          <Typography variant="body2" component="div">
            {todos.map((todo) => (
              <ToDoItem key={todo._id} todo={todo} />
            ))}
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};

ToDoCard.propTypes = {
  cardType: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
};

export default ToDoCard;
