const STATUSES = {
  FREE: 'free',
  BUSY: 'busy',
};

class Slot {
  constructor() {
    this.status = STATUSES.FREE;
    this.vehicle;
  }

  park(vehicle) {
    this.status = STATUSES.BUSY;
    this.vehicle = vehicle;
  }

  leave() {
    this.status = STATUSES.FREE;
    this.vehicle = undefined;
  }

  isFree() {
    return this.status === STATUSES.FREE;
  }

  hasVehicle(rego) {
    return this.vehicle && this.vehicle.rego === rego;
  }
}

module.exports = Slot;