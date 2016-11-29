import React from 'react';
import SquareContainer from './square_container.js';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const positions = [];
    for (let i = 0; i < 64; i++) {
      positions.push([Math.floor(i/8), i % 8]);
    }

    return (
      <ul className="board">
        {positions.map((pos, idx) => (
          <SquareContainer
            key={idx}
            pos={pos}
          />
        ))}
      </ul>
    );
  }
}

export default Board;
