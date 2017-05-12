import { SWITCH_PLAYERS, win } from '../actions/player_actions.js';
import Game from '../game/game.js';
import makeMove from '../game/ai.js';

function other(id) {
  if (id === 1) return 2;
  return 1;
}

export default ({ getState, dispatch }) => next => action => {
  switch(action.type) {
    case SWITCH_PLAYERS:
      const game = new Game(getState().pieces);
      const players = getState().players;
      const otherPlayer = other(players.currentPlayer);
      const computerNext = players[otherPlayer].type === 'computer';
      const otherColor = players[otherPlayer].color;

      if (!game.canMove(otherColor)) {
        dispatch(win(players.currentPlayer));
        return next(action);
      }

      if (computerNext) {
        makeMove(otherPlayer);
      }

      return next(action);
    default:
      return next(action);
  }
}

