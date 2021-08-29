class ParkingError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParkingError";
  }
}