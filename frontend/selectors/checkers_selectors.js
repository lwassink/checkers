import { createSelector } from 'reselect';

export const piecesByPos = createSelector(
  [state => state.checkers],
  checkers => {
    const pieces = {};
    _.values(checkers).forEach(checker => {
      pieces[checker.pos] = checker
    });
    return pieces;
  }
);

