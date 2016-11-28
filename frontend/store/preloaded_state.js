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

const boardSetup = {};

lightLocations.forEach((pos, idx) => {
  boardSetup[idx + 1] = {
    id: idx + 1,
    color: 'light-piece',
    pos: pos,
    king: false
  };
});

darkLocations.forEach((pos, idx) => {
  boardSetup[idx + 13] = {
    id: idx + 13,
    color: 'dark-piece',
    pos: pos,
    king: false
  };
});

export default {
  pieces: boardSetup
};

