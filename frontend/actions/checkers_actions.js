export const MOVE_PIECE = 'MOVE_PIECE';
export const movePiece = (pieceId, targetPos) => ({
  type: MOVE_PIECE,
  pieceId,
  targetPos
});

