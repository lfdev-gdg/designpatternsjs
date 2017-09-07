const CarFactoryMethod = require ('./CarFactoryMethod');
const Cars = require('./Cars');

class ItalianFactory extends CarFactoryMethod {
  makeCar(type) {
    switch (type) {
      case this.cheap:
        const beetle = new Cars.Beetle();
        beetle.color = 'red';
        return beetle;
        break;

      case this.fast:
        return new Cars.Ferrari();
        break;

      default:
        throw new Error('type is not valid');
    }
  }
}

class GermanFactory extends CarFactoryMethod {
  makeCar(type) {
    switch (type) {
      case this.cheap:
        return new Cars.Beetle();
        break;

      case this.fast:
        const mercedes = new Cars.Mercedes();
        mercedes.addAMGTunning();
        mercedes.color = 'blue';
        return mercedes;
        break;

      default:
        throw new Error('type is not valid');
    }
  }
}

module.exports = { GermanFactory, ItalianFactory }
