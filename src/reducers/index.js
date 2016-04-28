import * as ActionTypes from '../actions';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action;

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return action.error;
  }

  return state;
};

const colors = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SET_COLOR_LIST:
      return action.colors;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  colors,
  errorMessage,
  routing,
});

export default rootReducer;
