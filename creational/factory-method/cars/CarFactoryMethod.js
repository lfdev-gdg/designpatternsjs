class CarFactoryMethod {
  constructor () {
    this.cheap = 'cheap';
    this.fast = 'fast';
  }

  create (type) {
    return this.makeCar(type);
  }
}

module.exports = CarFactoryMethod;
