import React from 'react';
import { DragSource } from 'react-dnd';
import { PIECE, pieceSource } from '../../drag/specs.js';
import classNames from 'classnames';

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class Piece extends React.Component {
  render() {
    const { isDragging,
      connectDragSource,
      connectDragPreview,
      myTurn } = this.props;

    const piece = this.props.piece || {
      color: null,
      king: false
    }
    const { color, king } = piece;
    let classes = classNames('piece',
      { 'dragging': isDragging },
      { 'light-piece': color === 'light' },
      { 'dark-piece': color === 'dark' },
      { 'active': myTurn },
      { 'king': king }
    )

    return connectDragSource(
      <div
        style={{opacity: .99}}>
        {connectDragPreview(
          <div
            className={classes} >
          </div>)}
      </div>
    );
  }
}

export default DragSource(
  PIECE,
  pieceSource,
  collect
)
(Piece);

