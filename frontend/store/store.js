import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer.js';
import RootMiddleware from '../middleware/root_middleware.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (preloadedState = {}) => {
  return createStore(RootReducer, preloadedState,
    composeEnhancers(RootMiddleware)
  );
};

