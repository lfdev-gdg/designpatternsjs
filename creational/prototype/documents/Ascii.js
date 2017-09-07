const DocumentPrototype = require ('./DocumentPrototype');

class Ascii extends DocumentPrototype {
  constructor(filename) {
    super();
    
    this.filename = filename;
  }

  clone () {
    return new Ascii(this.filename);
  }
}

module.exports = Ascii;
