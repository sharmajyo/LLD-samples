export class User {
  id:number;
  symbol: 'o' | 'x';
  constructor(id, symbol) {
    this.id = id;
    this.symbol = id === 1 ? 'o' : 'x';
  }
}
