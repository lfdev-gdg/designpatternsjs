const DocumentPrototype = require ('./DocumentPrototype');

class Pdf extends DocumentPrototype {
  constructor(filename) {
    super();

    this.filename = filename;
  }

  clone () {
    return new Pdf(this.filename);
  }
}

module.exports = Pdf;
