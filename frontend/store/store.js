import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer.js';

export default (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
  );
};

