const MazeGame = require ('./maze/MazeGame');
const MazeFactory = require ('./maze/MazeFactory');

// const normalMazeFactory = new MazeFactory();
//
// const mazeGame = new MazeGame();
// const game = mazeGame.createMaze(normalMazeFactory);
//
// console.log(game);
// console.log(game.getRooms());

// ------------------------------------------------------------------

const Door = require ('./maze/Door');
const Room = require ('./maze/Room');
const Wall = require ('./maze/Wall');
const Maze = require ('./maze/Maze');
const MazePrototypeFactory = require ('./maze/MazePrototypeFactory');

const prototypeFactory = new MazePrototypeFactory(
  new Maze(),
  new Wall(),
  new Room(),
  new Door()
);

const newMazeGame = new MazeGame();
const newGame = newMazeGame.createMaze(prototypeFactory);

console.log(newGame);
console.log(newGame.getRooms());
