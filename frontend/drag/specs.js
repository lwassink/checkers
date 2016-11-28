export const PIECE = 'piece';

export const pieceSource = {
  beginDrag: (props, monitor, component) => ({
    id: props.id
  })
};

export const squareTarget = {
  drop: (props) => {
    props.move()
  }
};

