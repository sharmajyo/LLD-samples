const STATUSES = {
  FREE: 'free',
  BUSY: 'busy',
};

  class Slot {
  constructor(level, bay, number) {
    this.status = STATUSES.FREE;
    this.car;
    this.metaData = {
      level,
      bay,
      number,
    }
  }

  carEnter(car) {
    this.car = car;
    this.status = STATUSES.BUSY;
  }

  carExit() {
    this.car = undefined;
    this.status = STATUSES.FREE;
  }
}

module.exports = Slot;