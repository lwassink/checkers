import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded", () => {
  window._ = _;

  ReactDOM.render(<Root />,
    document.getElementById("root"));
});

