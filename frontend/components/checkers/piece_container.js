import { connect } from 'react-redux';
import { removePiece } from '../../actions/pieces_actions.js';
import Piece from './piece.jsx';

const mapStateToProps = (state, ownProps) => ({
  piece: state.pieces[ownProps.id],
  id: ownProps.id,
  myTurn: state.pieces[ownProps.id].color === state.players[state.players.currentPlayer].color
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  remove: () => dispatch(removePiece(ownProps.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Piece);

