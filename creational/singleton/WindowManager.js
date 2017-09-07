let instance = null;

class WindowManager {
  constructor() {
    if(instance) {
      return instance;
    }

    this.state = 'testing';
    instance = this;
  }

  static getInstance() {
    if(instance) {
      return instance;
    }

    this.state = 'testing';
    return this;
  }

  setState (state) {
    this.state = state;
  }
}

module.exports = WindowManager;
