import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Root from './components/root.jsx';
import store from './store/store.js';


document.addEventListener("DOMContentLoaded", () => {
  window._ = _;
  window.store = store;

  ReactDOM.render(<Root store={store}/>,
    document.getElementById("root"));
});

