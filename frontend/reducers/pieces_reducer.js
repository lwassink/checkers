import { MOVE_PIECE,
  MAKE_KING,
  REMOVE_PIECE } from '../actions/pieces_actions.js';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = _.merge({}, oldState);

  switch(action.type) {
    case MOVE_PIECE:
      newState[action.id].pos = action.pos;
      return newState;
    case REMOVE_PIECE:
      delete newState[action.id];
      return newState;
    case MAKE_KING:
      newState[action.id].king = true;
      return newState;
    default:
      return oldState;
  }
}

