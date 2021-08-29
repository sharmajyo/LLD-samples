const ParkingService = require('./service/parkingService');
const parkingService = new ParkingService();

const init = (level = 1, capacity = 4) => {
  const levels = Array.from({ length: level }, (x, i) => i + 1);
  parkingService.initializeParkingLot(levels, capacity);
};

const park = (level, type, rego) => {
  parkingService.park(level, { type, rego });
};

const unpark = (level, slotNumber) => {
  parkingService.unpark(level, slotNumber);
};

const isParkingAvailable = (level) => {
  parkingService.getStatus(level);
};

const findVehicle = (level, rego) => {
  parkingService.getSlotNoFromRegistrationNo(level, rego);
};

try {
  init(3, 5);
  park(1, 'car', '101');
  findVehicle(1, '101');
  isParkingAvailable(1);
  unpark(1, 0);
  isParkingAvailable(1);

} catch (err) {
  console.log(err.message);
}
