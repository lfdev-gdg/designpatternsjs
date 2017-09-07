const MazeGame = require ('./maze/MazeGame');

const BombedMazeFactory = require ('./maze/bombed/BombedMazeFactory');
const EnchantedMazeFactory = require ('./maze/enchanted/EnchantedMazeFactory');

const bombedGame = new BombedMazeFactory();
const enchantedGame = new EnchantedMazeFactory();

const mazeGame = new MazeGame();
const game = mazeGame.createMaze(enchantedGame);

console.log(game);
console.log(game.getRooms());
