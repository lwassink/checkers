import React from 'react';
import Square from './square.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Square color='black' />
    );
  }
}

export default Board;

