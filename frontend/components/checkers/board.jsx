import React from 'react';
import Square from './square.jsx';

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
          <Square
            key={idx}
            pos={pos}
          />
        ))}
      </ul>
    );
  }
}

export default Board;



