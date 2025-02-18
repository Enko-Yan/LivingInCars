// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow { 
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number,
  ) {

  super();

  this.vin = vin;
  this.color = color;
  this.make = make; 
  this.model = model;
  this.year = year;
  this.weight = weight;
  this.topSpeed = topSpeed;
  this.towingCapacity = towingCapacity;

  if (wheels.length !== 4) {
    this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  } else {
    this.wheels = wheels;
  }

}

  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleMake = vehicle.make;
    const vehicleModel = vehicle.model;

    if (vehicle.make && vehicle.model) {
      console.log(`${vehicleMake} ${vehicleModel}`);
    } else {
      console.log("No vehicle make or model available.");
    }

    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Your ${vehicleMake} ${vehicleModel} is getting towed!`);
    } else {
      console.log(`Your ${vehicleMake} ${vehicleModel} is too heavy to tow.`);
    }
  } 

  override printDetails(): void {
    super.printDetails();
    console.log(`vin: ${this.vin}`);
    console.log(`color: ${this.color}`); 
    console.log(`make: ${this.make}`);  
    console.log(`model: ${this.model}`); 
    console.log(`year ${this.year}`); 
    console.log(`weight: ${this.weight}`); 
    console.log(`top speed: ${this.topSpeed}`);
    console.log(`capacity: ${this.towingCapacity}`); 

    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} in with a ${this.wheels[3].getTireBrand} tire`
    );
  }
}

export default Truck;
