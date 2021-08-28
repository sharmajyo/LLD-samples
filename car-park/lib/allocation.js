const Slot = require('./slot');
const LEVELS = ['B', 'L1'];
const BAYS = ['A', 'B'];
const SLOTS_PER_BAY = 2; // 8 parking


  class Allocation {
    constructor() {
      this.totalSlotsCount = 0;
      this.freeSlotsCount = 0;
      this.slots = [];
      this.startAllocation = false;
    }

    initialize() {
      if (!this.startAllocation) {
        let totalParking = 0;
        LEVELS.forEach(level => {
          BAYS.forEach(bay => {
            for(let i = 0; i< SLOTS_PER_BAY; i++) {
              const slot = new Slot(level, bay, i);
              this.slots.push(slot);
              totalParking++;
            }      
          });
        });
        
        this.totalSlotsCount = totalParking;
        this.freeSlotsCount = totalParking;
        this.startAllocation = true;
      }
    }
    
    slotOccupied() {
      this.freeSlotsCount--;
    }

    slotReleased() {
      this.freeSlotsCount++;
    }

    shutCarPark() {
      this.totalSlotsCount = 0;
      this.freeSlotsCount = 0;
      this.slots = [];
      this.startAllocation = false;
    }
}

module.exports =  new Allocation();