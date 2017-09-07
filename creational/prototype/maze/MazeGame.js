class MazeGame {

  createMaze (factory) {
    this.maze = factory.makeMaze();

    let room1 = factory.makeRoom(1);
    let room2 = factory.makeRoom(2);
    let door  = factory.makeDoor(room1, room2);

    this.maze.addRoom(room1);

    room1.setSide('north', factory.makeWall());
    room1.setSide('south', door);

    return this.maze;
  }

}

module.exports = MazeGame;
