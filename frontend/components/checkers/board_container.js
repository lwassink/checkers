import { connect } from 'react-redux';
import Board from './board.jsx';
import { movePiece } from '../../actions/pieces_actions.js';
import { switchPlayers } from '../../actions/player_actions.js';

const mapStateToProps = (state, ownProps) => ({
  pieces: state.pieces
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  move: (id, pos) => dispatch(movePiece(id, pos)),
  switchPlayers: () => dispatch(switchPlayers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

