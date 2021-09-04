const {User} = require('./user');

const FIRST_USER_ID = 1;
const SECOND_USER_ID = 2;
    
export class Board {
  players: {};
  currentPlayer: InstanceType<typeof User>;
  slots: {};

  constructor() {
    this.players = {
      [FIRST_USER_ID]: new User(FIRST_USER_ID),
      [SECOND_USER_ID]: new User(SECOND_USER_ID),
    };
    this.currentPlayer = Math.random() < 0.5 ? 
      this.players[FIRST_USER_ID] : this.players[SECOND_USER_ID];
    this.slots = {};
  }

  isFreeSpot(x, y): boolean {
    return ((this.slots[x] && this.slots[x][y]) == undefined); 
  }

  getPlayer(id) {
    return this.players[id];
  }

  takeSpot(player, x, y): void {
    if (!this.slots[x]) {
      this.slots[x] = { [y] : player.symbol };
    } else {
      this.slots[x][y] = player.symbol;
    }

    console.log(this.slots);
  }

  setNextPlayerTurn() {
    this.currentPlayer = this.currentPlayer.id == FIRST_USER_ID ? 
    this.players[SECOND_USER_ID] : this.players[FIRST_USER_ID];
  }

  checkWinner(lastX, lastY): number {
    if (lastX != undefined && lastY != undefined) {
      const symbol = this.slots[lastX][lastY];
      let foundMatchInY = true;
      let foundMatchInX = true;
      for(let i=0; i<3; i++) {
        if ( !this.slots[i] || !this.slots[i][lastY] || this.slots[i][lastY] != symbol) {
          foundMatchInY = false;
        }
        if ( !this.slots[lastX] || !this.slots[lastX][i] ||  this.slots[lastX][i] != symbol) {
          foundMatchInX = false;
        }
      }
      if (foundMatchInX || foundMatchInY) {
        return this.currentPlayer;
      }
    } else {
      console.log('game can only be won after move, please move.')
    }
  }
}

export class BoardSingleton {
  private static instance: Board;

  static initialize():  Board{
    if(!BoardSingleton.instance) {
      BoardSingleton.instance = new Board();
    }

    return BoardSingleton.instance;
  }
}