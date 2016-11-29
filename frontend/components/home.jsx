import React from 'react';
import DisplayContainer from './players/display_container.js';
import Board from './checkers/board.jsx';

export default (props) => {
  return (
    <div className="home">
      <DisplayContainer />
      <Board />
    </div>
  )
}
