import React from 'react';
import BoardContainer from './checkers/board_container.js';
import { Provider } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Root extends React.Component {
  render() {
    return (
      <div>
      <Provider store={this.props.store}>
      <BoardContainer />
      </Provider>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Root);

