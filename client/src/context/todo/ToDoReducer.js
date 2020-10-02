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

export default (state, action) => {
  switch (action.type) {
    case SHOW_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case SHOW_TODOS_REMAINING:
      return {
        ...state,
        todosRemaining: action.payload,
      };
    case SHOW_TODOS_IN_PROGRESS:
      return {
        ...state,
        todosInProgress: action.payload,
      };
    case SHOW_TODOS_COMPLETED:
      return {
        ...state,
        todosCompleted: action.payload,
      };
    case MOVE_TODO_IN_PROGRESS:
      return {
        ...state,
        todosInProgress: [action.payload, ...state.todosInProgress],
        todosRemaining: state.todosRemaining.filter(
          (todo) => todo !== action.payload
        ),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todosCompleted: [action.payload, ...state.todosCompleted],
        todosRemaining: state.todosRemaining.filter(
          (todo) => todo !== action.payload
        ),
        todosInProgress: state.todosInProgress.filter(
          (todo) => todo !== action.payload
        ),
      };
    case CREATE_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        todosInProgress: [action.payload, ...state.todosRemaining],
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
        todosRemaining: state.todosRemaining.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
        todosInProgress: state.todosInProgress.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
        todosCompleted: state.todosCompleted.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
        todosRemaining: state.todosRemaining.filter(
          (todo) => todo._id !== action.payload
        ),
        todosInProgress: state.todosInProgress.filter(
          (todo) => todo._id !== action.payload
        ),
        todosCompleted: state.todosCompleted.filter(
          (todo) => todo._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
