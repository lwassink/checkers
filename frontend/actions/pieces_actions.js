export const MOVE_PIECE = 'MOVE_PIECE';
export const movePiece = (id, pos) => ({
  type: MOVE_PIECE,
  id,
  pos
});

export const REMOVE_PIECE = 'REMOVE_PIECE';
export const removePiece = (id) => ({
  type: REMOVE_PIECE,
  id
});

export const MAKE_KING = 'MAKE_KING';
export const makeKing = (id) => ({
  type: MAKE_KING,
  id
});

