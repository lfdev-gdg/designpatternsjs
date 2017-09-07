const MazeFactory = require ('./MazeFactory');

class MazePrototypeFactory extends MazeFactory {

  constructor(maze, wall, room, door) {
      super();

      this.mazePrototype = maze;
      this.wallPrototype = wall;
      this.roomPrototype = room;
      this.doorPrototype = door;
  }

  makeMaze() {
    return this.mazePrototype.clone();
  }

  makeDoor(room1, room2) {
    let door = this.doorPrototype.clone();
    door.initialize(room1, room2);

    return door;
  }

  makeRoom(roomNumber) {
    let room = this.roomPrototype.clone();
    room.setNumber(roomNumber);

    return room;
  }

  makeWall() {
    return this.wallPrototype.clone();
  }
}

module.exports = MazePrototypeFactory;
