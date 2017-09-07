const MazeFactory = require ('../MazeFactory');

const Door = require('./EnchantedDoor');
const Room = require('./EnchantedRoom');
const Maze = require('./EnchantedMaze');
const Wall = require('./EnchantedWall');

class EnchantedMazeFactory extends MazeFactory {
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

module.exports = EnchantedMazeFactory;
