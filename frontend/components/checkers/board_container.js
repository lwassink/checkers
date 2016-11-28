import { connect } from 'react-redux';
import Board from './board.jsx';
import { movePiece } from '../../actions/checkers_actions.js';
import { piecesByPos } from '../../selectors/checkers_selectors.js';

const mapStateToProps = (state, ownProps) => ({
  ocupiedSquares: _.keys(state.checkers).map(key => (
    state.checkers[key].pos
  ))
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  move: pos => dispatch(movePiece(1, pos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

