import { MOVE_PIECE } from '../actions/checkers_actions.js';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = _.merge({}, oldState);

  switch(action.type) {
    case MOVE_PIECE:
      newState[action.pieceId].pos = action.targetPos;
      return newState;
    default:
      return oldState;
  }
}

