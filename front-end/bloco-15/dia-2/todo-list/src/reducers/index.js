import { combineReducers } from 'redux';

const INITIAL_STATE = { tasks: [] };

const reducerAddTask = (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [ ...state.tasks, action.newTask] };
    default:
      return INITIAL_STATE;
  }
};

const rootReducer = combineReducers({ reducerAddTask });

export default rootReducer;
