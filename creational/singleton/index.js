const WindowManager = require ('./WindowManager');
const Window = require ('./Window');

const a = new WindowManager();
const b = new WindowManager();

const c = WindowManager.getInstance();

// console.log(a === b);
// console.log(a === c);
// console.log(c);

c.setState('me and mrs jones');
//
// console.log(a.state);

const window = new Window();
window.sayMyName();
