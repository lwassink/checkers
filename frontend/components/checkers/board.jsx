import React from 'react';
import Square from './square.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  ocupied(pos) {
    let ocupied = false;
    this.props.ocupiedSquares.forEach(square => {
      if (square[0] === pos[0] && square[1] === pos[1]) {
        ocupied = true;
      }
    });
    return ocupied;
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
            ocupied={this.ocupied(pos)}
            move={() => this.props.move(pos)}
          />
        ))}
      </ul>
    );
  }
}

export default Board;

