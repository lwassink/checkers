import { connect } from 'react-redux';
import Square from './square.jsx';
import { movePiece,
  removePiece,
  makeKing } from '../../actions/pieces_actions.js';
import { switchPlayers,
  setCurrentPiece } from '../../actions/player_actions.js';

const mapStateToProps = (state, ownProps) => ({
  pieces: state.pieces,
  currentPiece: state.players.currentPiece
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  move: id => dispatch(movePiece(id, ownProps.pos)),
  switchPlayers: () => dispatch(switchPlayers()),
  removePiece: id => dispatch(removePiece(id)),
  makeKing: id => dispatch(makeKing(id)),
  setCurrentPiece: id => dispatch(setCurrentPiece(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);
