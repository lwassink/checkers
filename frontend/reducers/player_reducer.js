import { SWITCH_PLAYERS } from '../actions/player_actions.js';

const defaultState = {
  currentPlayer: 1
};

export default (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = _.merge({}, oldState);

  switch(action.type) {
    case SWITCH_PLAYERS:
      if (oldState.currentPlayer === 1) newState.currentPlayer = 2
      else newState.currentPlayer = 1
      return newState
    default:
      return oldState;
  }
}


