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
    const { isDragging, connectDragSource, connectDragPreview } = this.props;
    let classes = classNames('piece',
      { 'dragging': isDragging },
      'dark-piece'
    )

    return connectDragSource(
      <div style={{opacity: .99}}>
        {connectDragPreview(
          <div className={classes} />
        )}
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

