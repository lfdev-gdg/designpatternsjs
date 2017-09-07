const Room = require ('../Room');

class BombedRoom extends Room {
  constructor(roomNumber) {
    super(roomNumber);
  }
}

module.exports = BombedRoom;
