const parking = require('../allocation');
const Slot = require('../slot');
const Ticket = require('../ticket');


exports.buildTicket = () => {
  if (parking.freeSlotsCount != 0) {
    const ticket = new Ticket();
    ticket.generateTicket();
    return ticket;
  } else {
    console.log('parking full');
    throw new Error ('parking full');
  }
}

exports.allocateSlot = (car, slotNumber) => {
  const slot = parking.slots[slotNumber];
  if (slot.status === 'busy') {
    console.log('slot already taken');
    return;
  }
  slot.carEnter(car);
  parking.slotOccupied();
  console.log(`--car entered at ${slotNumber}, parking left ${parking.freeSlotsCount}`);
};

exports.releaseSlot = (slotNumber) => {
    const slot = parking.slots[slotNumber];
    slot.carExit();
    parking.slotReleased();
    console.log(`--car exited from ${slotNumber}, parking left ${parking.freeSlotsCount}`);
  };

exports.initializeCarPark = () => {
  parking.initialize();
  console.log('parking left', parking.freeSlotsCount);
}
