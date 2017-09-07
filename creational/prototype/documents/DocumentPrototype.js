class DocumentPrototype {
  constructor() {}

  getFilename() {
    return this.filename;
  }

  clone () {
    throw new Error ('we need a concrete prototype!');
  }
}

module.exports = DocumentPrototype;
