class Room {

  constructor(number) {
    this.roomNumber = number;

    this.positions = [];
    this.elements  = [];
  }

  setNumber(number) {
    this.roomNumber = number;
  }

  setSide(position, element) {
    this.positions.push(position);
    this.elements.push(element);
  }
}

module.exports = Room;
