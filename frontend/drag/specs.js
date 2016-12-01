import Game from '../game/game.js';

export const PIECE = 'piece';

export const pieceSource = {
  beginDrag: (props, monitor, component) => ({
    id: props.id
  }),
  canDrag: props => {
    if (props.myTurn) {
      if (props.currentPiece) {
        return props.currentPiece === props.id;
      }
      return true;
    }
    return false;
  }
};

export const squareTarget = {
  drop: (props, monitor, component) => {
    const game = new Game(props.pieces);
    const id = monitor.getItem().id;
    const captureId = game.capturedPiece(id, props.pos).id;
    let currentPiece = null;

    // capture by jumping
    if (captureId) {
      props.removePiece(captureId);
      currentPiece = id;
    }

    // king a piece if it reaches the final row
    if (props.pos[0] === 0 || props.pos[0] === 7) {
      props.makeKing(id);
    }

    // move the piece
    props.move(monitor.getItem().id);

    // don't switch players if the current piece can capture again
    if (currentPiece && game.pieceCanCapture(currentPiece, props.pos)) {
      props.setCurrentPiece(id);
    } else {
      props.switchPlayers();
    }
  },
  canDrop: (props, monitor) => {
    const game = new Game(props.pieces);
    return game.validMove(monitor.getItem().id, props.pos);
  }
};

