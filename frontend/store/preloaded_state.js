const lightLocations = [
  [0,1],
  [0,3],
  [0,5],
  [0,7],
  [1,0],
  [1,2],
  [1,4],
  [1,6],
  [2,1],
  [2,3],
  [2,5],
  [2,7],
]

const darkLocations = [
  [5,0],
  [5,2],
  [5,4],
  [5,6],
  [6,1],
  [6,3],
  [6,5],
  [6,7],
  [7,0],
  [7,2],
  [7,4],
  [7,6],
]

const pieces = {};

lightLocations.forEach((pos, idx) => {
  pieces[idx + 1] = {
    id: idx + 1,
    color: 'light',
    pos: pos,
    king: false
  };
});

darkLocations.forEach((pos, idx) => {
  pieces[idx + 13] = {
    id: idx + 13,
    color: 'dark',
    pos: pos,
    king: false
  };
});


const players = {
  1: {
    id: 1,
    color: 'light'
  },
  2: {
    id: 2,
    color: 'dark'
  },
  currentPlayer: 1
}


export default {
  pieces,
  players
};

