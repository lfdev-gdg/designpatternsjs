class Maze {

  constructor() {
    this.rooms = [];
  }

  addRoom(room) {
    this.rooms.push(room);
  }

  getRooms() {
    return this.rooms;
  }

  clone () {
    return new Maze();
  }
}

module.exports = Maze;
