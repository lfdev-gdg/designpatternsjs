const MazeFactory = require ('../MazeFactory');

const Door = require('./BombedDoor');
const Room = require('./BombedRoom');
const Maze = require('./BombedMaze');
const Wall = require('./BombedWall');

class BombedMazeFactory extends MazeFactory {
  constructor() {
    super();
  }

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

module.exports = BombedMazeFactory;
