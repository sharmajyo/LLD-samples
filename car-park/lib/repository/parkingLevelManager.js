
const Slot = require('../model/slot');

class ParkingLevelManager {
  constructor(level, capacity) {
    const slotVehicleList = [];
    for (let index = 0; index < capacity; index++) {
      slotVehicleList.push({ id: index, slot: new Slot() }); // index will be id of slot
    }
    this.level = level;
    this.capacity = capacity;
    this.availability = capacity;
    this.slotVehicleList = slotVehicleList;
  }

  _findFreeSlot() {
    return this.slotVehicleList.find(({ slot }) => {
      return slot.status === 'free';
    });
  }

  _findSlotById(slotId) {
    let _slot;
    this.slotVehicleList.find(({ id, slot }) => {
      if (id === slotId) {
        _slot = slot;
      }
    });

    return _slot;
  }

  _updateAvailablity({ parkingTaken }) {
    parkingTaken ? this.availability-- : this.availability++;
  }

  park(vehicle) {
    if (this.availability != 0) {
      const { slot: freeSlot, id } = this._findFreeSlot();
      if (freeSlot) {
        freeSlot.park(vehicle);
        this._updateAvailablity({ parkingTaken: true });
        console.log(`${vehicle.type} parked at ${id}`);
      } else {
        console.log('all slots are busy');
      }
    } else {
      console.log('parking full on this level');
    }
  }

  unpark(slotNumber) {
    if (this.availability != 0) {
      const slot = this._findSlotById(slotNumber);
      if (!slot || slot.status === 'free') {
        console.log('no vehicle present');
      } else {
        console.log('vehicle found', slot);
        slot.leave();
        this._updateAvailablity({ parkingTaken: false });
      }
    } else {
      console.log('parking full on this level');
    }
  }

  getStatus() {
    let freeSlot = 0;
    let busySlot = 0;
    this.slotVehicleList.map(({ slot }) => {
      slot.isFree() ? freeSlot++ : busySlot++;
    });

    return { freeSlot, busySlot };
  }

  findVehicle(rego) {
    let vehicle;
    this.slotVehicleList.find(({ slot }) => {
      if (slot.hasVehicle(rego)) {
        vehicle = slot.vehicle;
      };
    });

    return vehicle;
  }
}

module.exports = ParkingLevelManager;