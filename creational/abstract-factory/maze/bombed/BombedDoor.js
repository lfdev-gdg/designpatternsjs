const Door = require ('../Door');

class BombedDoor extends Door {
  constructor(room1, room2) {
    super(room1, room2);
  }
}

module.exports = BombedDoor;
