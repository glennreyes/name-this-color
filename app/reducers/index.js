import * as ActionTypes from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

const rootReducer = combineReducers({
  errorMessage,
  routing
})

export default rootReducer
