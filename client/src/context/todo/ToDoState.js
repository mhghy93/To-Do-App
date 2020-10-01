import React, { useReducer } from 'react';
import axios from 'axios';
import ToDoContext from './ToDoContext';
import ToDoReducer from './ToDoReducer';
import {
  SHOW_TODOS,
  SHOW_TODOS_REMAINING,
  SHOW_TODOS_IN_PROGRESS,
  SHOW_TODOS_COMPLETED,
  MOVE_TODO_IN_PROGRESS,
  COMPLETE_TODO,
  CREATE_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from '../types';
import { STATES } from 'mongoose';

const ToDoState = (props) => {
  const initialState = {
    todos: [],
    todosRemaining: [],
    todosInProgress: [],
    todosCompleted: [],
  };

  const [state, dispatch] = useReducer(ToDoReducer, initialState);

  const showToDosRemaining = async () => {
    const res = await axios.get('api/todo/remaining');
    dispatch({
      type: SHOW_TODOS_REMAINING,
      payload: res.data,
    });
  };

  return (
    <ToDoContext.Provider
      value={{
        todos: state.todos,
        todosRemaining: state.todosRemaining,
        todosInProgress: state.todosInProgress,
        todosCompleted: state.todosCompleted,
        showToDosRemaining,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoState;
