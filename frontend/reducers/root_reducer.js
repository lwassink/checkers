import { combineReducers } from 'redux';
import PiecesReducer from './pieces_reducer.js';
import PlayersReducer from './player_reducer.js';

export default combineReducers({
  pieces: PiecesReducer,
  players: PlayersReducer
});

