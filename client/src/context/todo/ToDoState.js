import React from 'react';
import axios from 'axios';
import ToDoContext from './ToDoContext';
import {
  SHOW_TODOS,
  SHOW_TODOS_IN_PROGRESS,
  SHOW_TODOS_COMPLETED,
  MOVE_TODO_IN_PROGRESS,
  COMPLETE_TODO,
  CREATE_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from '../types';

const ToDoState = (props) => {
  const initialState = {
    todos: [],
    todosInProgress: [],
    todosCompleted: [],
  };
};

export default ToDoState;
