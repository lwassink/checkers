import { combineReducers } from 'redux';
import PiecesReducer from './pieces_reducer.js';

export default combineReducers({
  pieces: PiecesReducer
});

