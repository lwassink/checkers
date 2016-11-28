import { connect } from 'react-redux';
import Display from './display.jsx';

const mapStateToProps = (state, ownProps) => ({
  currentColor: state.players[state.players.currentPlayer].color
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);

