import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, battery) {
    super(brand, motor, color);
    this._battery = battery;
  }

  get battery() {
    return this._battery;
  }

  set battery(value) {
    this._battery = value;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
