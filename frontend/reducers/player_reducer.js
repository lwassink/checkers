import { SWITCH_PLAYERS,
  WIN,
  SET_CURRENT_PIECE } from '../actions/player_actions.js';

const defaultState = {
  currentPlayer: 1,
  currentPiece: null
};

export default (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = _.merge({}, oldState);

  switch(action.type) {
    case SWITCH_PLAYERS:
      if (oldState.currentPlayer === 1) newState.currentPlayer = 2
      else newState.currentPlayer = 1
      newState.currentPiece = null;
      return newState
    case SET_CURRENT_PIECE:
      newState.currentPiece = action.id;
      return newState;
    case WIN:
      newState.winner = action.id;
      return newState;
    default:
      return oldState;
  }
}


