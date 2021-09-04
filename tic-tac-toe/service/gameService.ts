
const {BoardSingleton, Board} = require('../model/board');

export class GameService {
  _board: InstanceType<typeof Board>;
  constructor() {
    this._board = BoardSingleton.initialize();
    console.log(`player ${this._board.currentPlayer.id} start the game.`);
  }

  move(playerId, x, y) {
    if (this._board.isFreeSpot(x,y)) {
      const player = this._board.getPlayer(playerId);
      if (!player) {
        console.log('invalid player');
        return;
      }

    if (player != this._board.currentPlayer) {
      console.log('wait for other player');
      return;
    }
      this._board.takeSpot(player, x,y);
      const winner = this._board.checkWinner(x,y);

      if(!winner) {
        // lock game so next player can move
        this._board.setNextPlayerTurn();
      } else {
        console.log(`game over. Player ${playerId} won`);
        process.exit(0);
      }
    } else {
      console.log('this spot is taken');
    } 
  }
}
