import { combineReducers } from 'redux';

const INITIAL_STATE = { task: [] };

const reducerAddTask = (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { task: [ ...state.task, action.newTask] };
    default:
      return INITIAL_STATE;
  }
};

const rootReducer = combineReducers({ reducerAddTask });

export default rootReducer;
