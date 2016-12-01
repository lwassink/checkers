class Game {
  constructor(pieces) {
    this.pieces = pieces;
  }

  validMove(id, pos) {
    const piece = this.pieces[id]
    return (
      ( this.allowedMove(piece, pos) &&
        !this.canCapture(piece.color) ) ||
      this.wouldCapture(piece, pos)
    ) &&
      !this.ocupied(pos);
  }

  capturedPiece(id, pos) {
    const startPos = this.pieces[id].pos;
    return this.midPiece(startPos, pos);
  }

  pieceCanCapture(id, pos) {
    const piece = _.merge({}, this.pieces[id]);
    piece.pos = pos;
    const moves = this.captureMoves(piece);

    for (let j = 0; j < moves.length; j++) {
      if (this.wouldCapture(piece, moves[j]) &&
        !this.ocupied(moves[j])) {
          return true;
      }
    }
    return false;
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

  canCapture(color) {
    const pieces = _.filter(this.pieces, { color });
    for (let i = 0; i < pieces.length; i ++) {
      const moves = this.captureMoves(pieces[i]);
      for (let j = 0; j < moves.length; j++) {
        if (this.wouldCapture(pieces[i], moves[j]) &&
          !this.ocupied(moves[j])) return true;
      }
    }
    return false;
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
    const lightMoves = [[Y + 1, X + 1], [Y + 1, X - 1]];
    const darkMoves = [[Y - 1, X + 1], [Y - 1, X - 1]];

    if (piece.king) {
      moves = lightMoves.concat(darkMoves);
    } else if (piece.color === 'light') {
      moves = lightMoves;
    } else {
      moves = darkMoves;
    }

    return this.filterInBounds(moves);
  }

  captureMoves(piece) {
    const [Y, X] = piece.pos
    const lightMoves = [[Y + 2, X + 2], [Y + 2, X - 2]];
    const darkMoves = [[Y - 2, X + 2], [Y - 2, X - 2]];
    let moves = [];

    if (piece.king) {
      moves = lightMoves.concat(darkMoves);
    } else if (piece.color === 'light') {
      moves = lightMoves;
    } else {
      moves = darkMoves;
    }

    return this.filterInBounds(moves);
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

  inBounds(pos) {
    return pos[0] < 8 && pos[0] >= 0 &&
      pos[1] < 8 && pos[1] >= 0
  }

  filterInBounds(posList) {
    return posList.filter(this.inBounds);
  }

  eq(pos1, pos2) {
    return pos1[0] === pos2[0] && pos1[1] === pos2[1];
  }
}

export default Game;

