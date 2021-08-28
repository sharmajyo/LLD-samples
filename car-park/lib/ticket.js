const BASE_PRICE = '5';

const calculatePrice = (start, end) => {
  duration = end - start;
  BASE_PRICE * duration;
}

class Ticket {
  constructor() {
    this.number = Math.random();
  }

  generateTicket(car) {
    this.carEnteredAt = new Date();
    this.car = car;
  }

  validateTicket(car) {
    this.carExitAt = new Date();
    this.price = calculatePrice(this.carEnteredAt, this.carExitAt);
  }
}

module.exports = Ticket;