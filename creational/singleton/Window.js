const WindowManager = require ('./WindowManager');

class Window {

  sayMyName() {
    console.log(WindowManager.getInstance().state);
  }
}

module.exports = Window;
