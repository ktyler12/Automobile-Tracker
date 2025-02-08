// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    this.towingCapacity = towingCapacity;
  }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(_vehicle: Truck | Motorbike | Car): void {
    if (_vehicle) {
      if (_vehicle.weight <= this.towingCapacity) {
        console.log(`Towing ${_vehicle.make} ${_vehicle.model}`);
      } else {
        console.log(`${_vehicle.make} ${_vehicle.model} is too heavy to be towed`);
      }
    }
    }
  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    console.log(`Truck Details: 
      VIN: ${this.vin}, 
      Color: ${this.color}, 
      Make: ${this.make}, 
      Model: ${this.model}, 
      Year: ${this.year}, 
      Weight: ${this.weight}, 
      Top Speed: ${this.topSpeed}, 
      Towing Capacity: ${this.towingCapacity}`);
  }
  }
  // Export the Truck class as the default export
export default Truck;
