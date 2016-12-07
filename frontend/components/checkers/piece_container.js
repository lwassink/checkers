import { connect } from 'react-redux';
import { removePiece } from '../../actions/pieces_actions.js';
import Piece from './piece.jsx';

const myTurn = (piece, currentPlayer) => {
  let myColor;
  if (piece) myColor = piece.color;
  return myColor === currentPlayer.color;
};

const mapStateToProps = (state, ownProps) => {
  return ({
    piece: state.pieces[ownProps.id],
    id: ownProps.id,
    myTurn: myTurn(state.pieces[ownProps.id], state.players[state.players.currentPlayer]),
    currentPiece: state.players.currentPiece,
    pieces: state.pieces,
    winner: state.players.winner
  });
}

export default connect(
  mapStateToProps
)(Piece);

