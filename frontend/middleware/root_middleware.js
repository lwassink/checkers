import { applyMiddleware } from 'redux';
import PlayersMiddleware from './players_middleware.js';

export default applyMiddleware(
  PlayersMiddleware
);

