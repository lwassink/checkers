import React from 'react';
import Piece from './pieces.jsx';
import { PIECE, squareTarget } from '../../drag/specs.js';
import { DropTarget } from 'react-dnd';
import classNames from 'classnames';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

class Square extends React.Component {
  render() {
    const { pos, ocupied, onClick, selected } = this.props;
    const { connectDropTarget } = this.props;

    const color = (pos[0] + pos[1]) % 2 == 0 ? 'light-square' : 'dark-square';
    const cls = classNames(color, ' square', selected);

    const piece = ocupied ? <Piece key={1} id={1} /> : null;

    return connectDropTarget(
      <li
        onClick={onClick}
        className={cls}>
        {piece}
      </li>
    );
  }
}

export default DropTarget(PIECE, squareTarget, collect)(Square);

