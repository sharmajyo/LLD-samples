
const {GameService} = require('./service/gameService');

let game = new GameService();
game.move(1, 0, 1);
game.move(2, 2, 1);
game.move(1, 1, 1);
game.move(2, 2, 2);
game.move(1, 0, 0);
game.move(2, 2, 0);
game.move(1, 1, 0);
game.move(2, 0, 2);
game.move(1, 1, 2);