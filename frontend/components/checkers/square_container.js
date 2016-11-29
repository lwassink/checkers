import { connect } from 'react-redux';
import Square from './square.jsx';
import { movePiece } from '../../actions/pieces_actions.js';
import { switchPlayers } from '../../actions/player_actions.js';

const mapStateToProps = (state, ownProps) => ({
  pieces: state.pieces
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  move: id => dispatch(movePiece(id, ownProps.pos)),
  switchPlayers: () => dispatch(switchPlayers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);
