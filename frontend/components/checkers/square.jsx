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
    const { pos, pieces } = this.props;
    const { connectDropTarget, isOver, canDrop } = this.props;

    let ocupied = false;
    _.keys(pieces).forEach(id => {
      const X = pieces[id].pos[0];
      const Y = pieces[id].pos[1];
      if (X === pos[0] && Y === pos[1]) {
        ocupied = id;
      }
    });

    const color = (pos[0] + pos[1]) % 2 == 0 ? 'light-square' : 'dark-square';
    const cls = classNames(
      color,
      'square',
      {droppable: isOver && canDrop}
    );

    const piece = ocupied ?
      <PieceContainer key={ocupied} id={ocupied} /> :
      null;

    return connectDropTarget(
      <li
        className={cls}>
        {piece}
      </li>
    );
  }
}

export default DropTarget(
  PIECE,
  squareTarget,
  collect)
(Square);

