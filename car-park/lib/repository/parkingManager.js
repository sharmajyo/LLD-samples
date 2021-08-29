const ParkingLevelManager = require('./parkingLevelManager');

class ParkingDataManager {
  constructor(levels, capacity) {
    this.levelParkingMap = {};
    for (let index = 0; index < levels.length; index++) {
      const level = levels[index];
      this.levelParkingMap[level] = new ParkingLevelManager(level, capacity);
    }
  }
  park(level, vehicle) {
    this.levelParkingMap[level].park(vehicle);
  }
  unpark(level, slotNumber) {
    this.levelParkingMap[level].unpark(slotNumber);
  }

  getStatus(level) {
    const { freeSlot, busySlot } = this.levelParkingMap[level].getStatus();
    console.log(`freeSlot ${freeSlot}, busySlot ${busySlot} at level ${level}`);
  }

  findVehicle(level, rego) {
    const vehicle = this.levelParkingMap[level].findVehicle(rego);
    if (vehicle) {
      console.log(`found ${vehicle.type} at level ${level}`);
    } else {
      console.log(`no vehicle ${rego} found at level ${level}`)
    }
  }
}

class ParkingManager {
  static #instance;
  static getInstance(levels, capacity) {
    if (!this.#instance) {
      this.#instance = new ParkingDataManager(levels, capacity);
    }

    return this.#instance;
  }


}

module.exports = ParkingManager;