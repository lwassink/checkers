import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

document.addEventListener("DOMContentLoaded", () => {
  window._ = _;

  ReactDOM.render(<div>I'm React</div>,
    document.getElementById("root"));
});

