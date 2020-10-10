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
  CLEAR_TODO,
} from '../types';

const ToDoState = (props) => {
  const initialState = {
    todos: [],
    todosRemaining: [],
    todosInProgress: [],
    todosCompleted: [],
  };

  const [state, dispatch] = useReducer(ToDoReducer, initialState);

  const showToDos = async () => {
    const res = await axios.get('api/todo/all');
    dispatch({
      type: SHOW_TODOS,
      payload: res.data,
    });
  };

  const showToDosRemaining = async () => {
    const res = await axios.get('api/todo/remaining');
    dispatch({
      type: SHOW_TODOS_REMAINING,
      payload: res.data,
    });
  };

  const showToDosInProgress = async () => {
    const res = await axios.get('api/todo/inProgress');
    dispatch({
      type: SHOW_TODOS_IN_PROGRESS,
      payload: res.data,
    });
  };

  const showToDosCompleted = async () => {
    const res = await axios.get('api/todo/completed');
    dispatch({
      type: SHOW_TODOS_COMPLETED,
      payload: res.data,
    });
  };

  const moveToDoInProgress = async (id) => {
    const res = await axios.put(`api/todo/inProgress/${id}`);
    dispatch({
      type: MOVE_TODO_IN_PROGRESS,
      payload: res.data,
    });
  };

  const completeToDo = async (id) => {
    const res = await axios.put(`api/todo/complete/${id}`);
    dispatch({
      type: COMPLETE_TODO,
      payload: res.data,
    });
  };

  const createToDo = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('api/todo/create', formData, config);
    dispatch({
      type: CREATE_TODO,
      payload: res.data,
    });
  };

  const editToDo = async (id, formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.put(`api/todo/edit/${id}`, config, formData);
    dispatch({
      type: EDIT_TODO,
      payload: res.data,
    });
  };

  const deleteToDo = async (id) => {
    await axios.delete(`api/todo/delete/${id}`);
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };

  return (
    <ToDoContext.Provider
      value={{
        todos: state.todos,
        todosRemaining: state.todosRemaining,
        todosInProgress: state.todosInProgress,
        todosCompleted: state.todosCompleted,
        showToDos,
        showToDosRemaining,
        showToDosInProgress,
        showToDosCompleted,
        moveToDoInProgress,
        completeToDo,
        createToDo,
        editToDo,
        deleteToDo,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoState;
