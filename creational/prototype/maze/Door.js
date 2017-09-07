class Door {

  constructor(room1, room2) {
    this.room1 = room1;
    this.room2 = room2;
  }

  isOpen() {
    return this.isOpen;
  }

  open() {
    if (!this.isOpen) {
      this.isOpen = !isOpen;
    }
  }

  initialize(room1, room2) {
    this.room1 = room1;
    this.room2 = room2;
  }

  clone () {
    return new Door(this.room1, this.room2);
  }
}

module.exports = Door;
