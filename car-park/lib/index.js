
const { initializeCarPark, buildTicket, allocateSlot, releaseSlot } = require('./utils/slotAllocationBuilder');
const Vehicle = require('./vehicle');

const main = () => {
  initializeCarPark();
};

const enterNewCar = () => {
  try {
    console.log('00new car')
    const car = new Vehicle('car-num1');
    return buildTicket(car);
  } catch(e) {
    console.log('parking is full or system is faulty')
  }
};

main();
//
const ticket = enterNewCar();
///// for the purpose of testing, enter max cars
const car = new Vehicle('car-num1');
allocateSlot(car, 0);
allocateSlot(car, 1);
allocateSlot(car, 2);
allocateSlot(car, 3);
allocateSlot(car, 4);
allocateSlot(car, 5);
allocateSlot(car, 6);
allocateSlot(car, 7);
/////
// should throw error for full
enterNewCar();
// exit one car
releaseSlot(2);
// should not throw error for full
enterNewCar();
// should throw error for full
allocateSlot(car, 2);
allocateSlot(car, 4);