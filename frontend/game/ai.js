import Game from './game.js';
import { movePiece, removePiece, makeKing } from '../actions/pieces_actions.js';
import { switchPlayers, setCurrentPiece } from '../actions/player_actions.js';
import store from '../store/store.js';

let dispatch;
let getState;
window.setTimeout(() => {
  dispatch = store.dispatch;
  getState = store.getState;
}, 0)

function playerPieces(game, player) {
  const pieces = [];
  _.values(getState().pieces).forEach(piece => {
    if (piece.player === player) pieces.push(piece);
  });
  return pieces;
}

function validMoves(game, piece) {
  const moves = game.moves(piece).concat(game.captureMoves(piece));
  const validMoves = [];
  moves.forEach(move => {
    if (game.validMove(piece.id, move)) validMoves.push(move);
  });
  return validMoves;
}

function validPieces(game, player) {
  const pieces = [];
  playerPieces(game, player).forEach(piece => {
    if (validMoves(game, piece).length > 0) pieces.push(piece);
  });
  return pieces;
}

// returns [piece, movePos]
function randomMove(game, player) {
  const pieces = validPieces(game, player);
  const piece = pieces[Math.floor(Math.random() * pieces.length)];
  const moves = validMoves(game, piece);
  return {
    piece,
    pos: moves[Math.floor(Math.random() * moves.length)]
  };
}

function aiMove(game, player) {
  let currentPiece;
  const { piece, pos } = randomMove(game, player);
  dispatch(movePiece(piece.id, pos));

  // capture by jumping
  const captureId = game.capturedPiece(piece.id, pos).id;
  if (captureId) {
    dispatch(removePiece(captureId));
    currentPiece = piece.id;
  }

  // king a piece if it reaches the final row
  if (pos[0] === 0 || pos[0] === 7) {
    dispatch(makeKing(piece.id));
  }

  // don't switch players if the current piece can capture again
  if (currentPiece && game.pieceCanCapture(currentPiece, pos)) {
    dispatch(setCurrentPiece(piece.id));
    dispatch(switchPlayers());
  }
  dispatch(switchPlayers());
}

const makeMove = (otherPlayer) => {
  const game = new Game(getState().pieces);
  window.setTimeout(() => aiMove(game, otherPlayer), 100);
}

export default makeMove;

