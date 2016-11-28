import React from 'react';
import Square from './square.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(pos) {
    return event => {
      if (this.state.selected) {
        this.props.move(pos);
        this.setState({
          selected: null
        });
      } else if (this.ocupied(pos)) {
        this.setState({
          selected: pos
        });
      }
    }
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

  selected(pos) {
    let selected = this.state.selected;
    if (selected && selected[0] === pos[0] && selected[1] === pos[1]) {
      return ' selected';
    } else {
      return '';
    }
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
            selected={this.selected(pos)}
            onClick={this.handleClick(pos)}
            ocupied={this.ocupied(pos)}
            move={() => this.props.move(pos)}
          />
        ))}
      </ul>
    );
  }
}

export default Board;

