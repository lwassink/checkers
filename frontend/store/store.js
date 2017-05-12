import { createStore, compose } from 'redux';
import RootReducer from '../reducers/root_reducer.js';
import RootMiddleware from '../middleware/root_middleware.js';
import preloadedState from './preloaded_state.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(RootReducer,
  preloadedState,
  composeEnhancers(RootMiddleware)
);

export default store;
