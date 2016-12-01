import { connect } from 'react-redux';
import { win } from '../../actions/player_actions.js';
import Display from './display.jsx';

const pieceCount = (id, pieces) => {
  const color = (id === 1) ? 'light' : 'dark';
  pieces = _.filter(pieces, { color });
  return pieces.length;
}

const mapStateToProps = (state, ownProps) => ({
  currentColor: state.players[state.players.currentPlayer].color,
  winner: state.players.winner,
  winnerColor: state.players.winner ?
    state.players[state.players.winner].color :
    null,
  oneCount: pieceCount(1, state.pieces),
  twoCount: pieceCount(2, state.pieces)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setWinner: id => dispatch(win(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);

