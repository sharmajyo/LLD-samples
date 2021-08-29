const ValidationError = require('../error/validationError');
const TYPES = ['van', 'car'];

class Vehicle {
  constructor(type, rego) {
    if (!TYPES.includes(type))
      throw new ValidationError('invalid vehicle');

    this.type = type;
    this.rego = rego;
  }
}

module.exports = Vehicle;