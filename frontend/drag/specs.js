import Game from '../game/game.js';

export const PIECE = 'piece';

export const pieceSource = {
  beginDrag: (props, monitor, component) => ({
    id: props.id
  }),
  canDrag: props => props.myTurn
};

export const squareTarget = {
  drop: (props, monitor, component) => {
    props.move(monitor.getItem().id);
    props.switchPlayers();
  },
  canDrop: (props, monitor) => {
    const game = new Game(props.pieces);
    return game.validMove(monitor.getItem().id, props.pos);
  }
};

