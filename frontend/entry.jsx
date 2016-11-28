import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Root from './components/root.jsx';
import configureStore from './store/store.js';

const boardSetup = {
  1: {
    id: 1,
    color: 'white',
    pos: [0, 0]
  }
};

const initialState = {
  checkers: boardSetup
};

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore(initialState);

  window._ = _;
  window.store = store

  ReactDOM.render(<Root store={store }/>,
    document.getElementById("root"));
});

