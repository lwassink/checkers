import React from 'react';
import PieceContainer from './piece_container.js';
import { PIECE, squareTarget } from '../../drag/specs.js';
import { DropTarget } from 'react-dnd';
import classNames from 'classnames';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class Square extends React.Component {
  render() {
    const { pos, ocupied } = this.props;
    const { connectDropTarget, isOver, canDrop } = this.props;

    const color = (pos[0] + pos[1]) % 2 == 0 ? 'light-square' : 'dark-square';
    const cls = classNames(
      color,
      'square',
      {droppable: isOver && canDrop}
    );

    const piece = ocupied ? <PieceContainer key={ocupied} id={ocupied} /> : null;

    return connectDropTarget(
      <li
        className={cls}>
        {piece}
      </li>
    );
  }
}

export default DropTarget(PIECE, squareTarget, collect)(Square);

