const ParkingManager = require('../repository/parkingManager');
const Vehicle = require('../model/vehicle');
const ValidationError = require('../error/validationError');

class ParkingService {
  constructor() {
    this._dataManager;
  }
  initializeParkingLot(levels, capacity) {
    this._dataManager = ParkingManager.getInstance(levels, capacity);
  }

  validateParkingLot() {
    if (!this._dataManager) {
      throw new ValidationError('initialization of parking lot missing');
    }
  }

  park(level, { type, rego }) {
    // can put a lock for concurrency
    this.validateParkingLot();
    const vehicle = new Vehicle(type, rego);
    this._dataManager.park(level, vehicle);
  }

  unpark(level, slotNumber) {
    this.validateParkingLot();
    this._dataManager.unpark(level, slotNumber);
  }

  getStatus(level) {
    this.validateParkingLot();
    this._dataManager.getStatus(level);
  }

  getSlotNoFromRegistrationNo(level, vehicleRego) {
    this.validateParkingLot();
    this._dataManager.findVehicle(level, vehicleRego);
  }
}

module.exports = ParkingService;