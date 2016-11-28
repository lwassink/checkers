import React from 'react';
import Square from './square.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  ocupied(pos) {
    const { pieces } = this.props;

    let ocupied = false;
    _.keys(pieces).forEach(id => {
      const X = pieces[id].pos[0];
      const Y = pieces[id].pos[1];
      if (X === pos[0] && Y === pos[1]) {
        ocupied = id;
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
            move={id => this.props.move(id, pos)}
            switchPlayers={this.props.switchPlayers}
          />
        ))}
      </ul>
    );
  }
}

export default Board;

