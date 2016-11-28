import { connect } from 'react-redux';
import Board from './board.jsx';
import { movePiece } from '../../actions/pieces_actions.js';

const mapStateToProps = (state, ownProps) => ({
  pieces: state.pieces
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  move: (id, pos) => dispatch(movePiece(id, pos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

