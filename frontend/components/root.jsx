import React from 'react';
import Home from './home.jsx';
import { Provider } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          <Home />
        </Provider>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Root);

