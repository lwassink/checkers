import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer.js';

export default (preloadedState = {}) => {
  return createStore(RootReducer, preloadedState, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};

