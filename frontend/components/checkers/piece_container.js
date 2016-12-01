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
    myTurn: myTurn(state.pieces[ownProps.id], state.players[state.players.currentPlayer])
  });
}

export default connect(
  mapStateToProps
)(Piece);

