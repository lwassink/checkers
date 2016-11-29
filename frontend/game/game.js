class Game {
  constructor(pieces) {
    this.pieces = pieces;
  }

  validMove(id, pos) {
    const piece = this.pieces[id]
    return ( this.allowedMove(piece, pos) ||
      this.wouldCapture(piece, pos) ) &&
      !this.ocupied(pos);
  }

  capturedPiece(id, pos) {
    const startPos = this.pieces[id].pos;
    return this.midPiece(startPos, pos);
  }

  allowedMove(piece, pos) {
    const moves = this.moves(piece);
    for (let i = 0; i < moves.length; i++) {
      if (this.eq(pos, moves[i])) return true;
    }
    return false;
  }

  wouldCapture(piece, pos) {
    const moves = this.captureMoves(piece);
    for (let i = 0; i < moves.length; i++) {
      if (this.eq(pos, moves[i])
        && this.jumps(piece.pos, pos, piece.color)) return true;
    }
    return false
  }

  ocupied(pos) {
    for (let id in this.pieces) {
      if (this.eq(this.pieces[id].pos, pos)) return true;
    }
    return false;
  }

  moves(piece) {
    let moves = [];
    const [Y, X] = piece.pos

    if (piece.color === 'light') {
      moves = [[Y + 1, X + 1], [Y + 1, X - 1]]
    } else {
      moves = [[Y - 1, X + 1], [Y - 1, X - 1]]
    }

    return moves;
  }

  captureMoves(piece) {
    let moves = [];
    const [Y, X] = piece.pos

    if (piece.color === 'light') {
      moves = [[Y + 2, X + 2], [Y + 2, X - 2]]
    } else {
      moves = [[Y - 2, X + 2], [Y - 2, X - 2]]
    }

    return moves;
  }

  jumps(start, end, color) {
    const piece = this.midPiece(start, end);
    return piece && piece.color !== color;
  }

  midPiece(start, end) {
    const mid = [
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2
    ]

    for (let id in this.pieces) {
      if (this.eq(this.pieces[id].pos, mid)) {
        return this.pieces[id];
      }
    }
    return false;
  }

  eq(pos1, pos2) {
    return pos1[0] === pos2[0] && pos1[1] === pos2[1];
  }
}

export default Game;

