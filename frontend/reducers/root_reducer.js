import { combineReducers } from 'redux';
import CheckersReducer from './checkers_reducer.js';

export default combineReducers({
  checkers: CheckersReducer
});

