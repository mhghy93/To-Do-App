import React, { useContext, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ToDoContext from '../../context/todo/ToDoContext';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const AllTodos = () => {
  const classes = useStyles();

  const todoContext = useContext(ToDoContext);

  const { todos, showToDos } = todoContext;

  useEffect(() => {
    showToDos();
    // eslint-disable-next-line
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Created At</StyledTableCell>
            <StyledTableCell align="right">In Progress At</StyledTableCell>
            <StyledTableCell align="right">Completed At</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <StyledTableRow key={todo._id}>
              <StyledTableCell component="th" scope="row">
                {todo.title}
              </StyledTableCell>
              <StyledTableCell align="right">
                {new Date(todo.createdAt).toLocaleDateString()}
              </StyledTableCell>
              <StyledTableCell align="right">
                {todo.inProgressAt
                  ? new Date(todo.inProgressAt).toLocaleDateString()
                  : 'Nil'}
              </StyledTableCell>
              <StyledTableCell align="right">
                {todo.completedAt
                  ? new Date(todo.completedAt).toLocaleDateString()
                  : 'Nil'}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllTodos;
