import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Root from './components/root.jsx';
import configureStore from './store/store.js';
import preloadedState from './store/preloaded_state.js';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore(preloadedState);

  window._ = _;
  window.store = store

  ReactDOM.render(<Root store={store }/>,
    document.getElementById("root"));
});

