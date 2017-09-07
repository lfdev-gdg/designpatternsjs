const Door = require('./Door');
const Room = require('./Room');
const Maze = require('./Maze');
const Wall = require('./Wall');

class MazeFactory {

  constructor() {}

  makeMaze() {
    return new Maze();
  }

  makeDoor(room1, room2) {
    return new Door(room1, room2);
  }

  makeRoom(roomNumber) {
    return new Room(roomNumber);
  }

  makeWall() {
    return new Wall();
  }
}

module.exports = MazeFactory;
