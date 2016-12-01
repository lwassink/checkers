export const SWITCH_PLAYERS = 'SWITCH_PLAYERS';
export const switchPlayers = () => ({
  type: SWITCH_PLAYERS
});

export const SET_CURRENT_PIECE = 'SET_CURRENT_PIECE';
export const setCurrentPiece = (id) => ({
  type: SET_CURRENT_PIECE,
  id
});

export const WIN = 'WIN';
export const win = (id) => ({
  type: WIN,
  id
});

