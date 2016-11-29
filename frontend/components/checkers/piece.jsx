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
    const { color, king } = this.props.piece;
    let classes = classNames('piece',
      { 'dragging': isDragging },
      { 'light-piece': color === 'light' },
      { 'dark-piece': color === 'dark' },
      { 'active': myTurn }
    )

    return connectDragSource(
      <div
        style={{opacity: .99}}>
        {connectDragPreview(
          <div
            className={classes}
          />)}
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

