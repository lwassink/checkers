import { connect } from 'react-redux';
import Piece from './piece.jsx';

const mapStateToProps = (state, ownProps) => ({
  color: state.pieces[ownProps.id].color,
  id: ownProps.id
});

export default connect(
  mapStateToProps
)(Piece);

