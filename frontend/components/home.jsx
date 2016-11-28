import React from 'react';
import DisplayContainer from './players/display_container.js';
import BoardContainer from './checkers/board_container.js';

export default (props) => {
  return (
    <div className="home">
      <DisplayContainer />
      <BoardContainer />
    </div>
  )
}

