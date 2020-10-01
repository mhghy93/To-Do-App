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
      return state;
    default:
      return state;
  }
};
