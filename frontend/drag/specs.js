export const PIECE = 'piece';

export const pieceSource = {
  beginDrag: (props, monitor, component) => ({
    id: props.id
  })
};

export const squareTarget = {
  drop: (props, monitor, component) => {
    props.move(monitor.getItem().id);
  },
  canDrop: (props, monitor) => {
    return (props.pos[0] + props.pos[1]) % 2 === 1
  }
};

