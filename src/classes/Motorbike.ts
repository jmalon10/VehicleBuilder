// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
  private vin: string;
  private color: string;
  private make: string;
  private model: string;
  private year: number;
  private weight: number;
  private topSpeed: number;
  private wheels: Wheel[];
  // TODO: Create a constructor that accepts the properties of the Motorbike class
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[]){
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    super();
    // TODO: The constructor should initialize the properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels
  }
    
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    ensureTwoWheels(wheels: Wheel[]): Wheel[] {
      if (wheels.length < 2) {
          while (wheels.length < 2) {
              wheels.push(new Wheel());
          }
      }
      return wheels;
  }

  // TODO: Implement the wheelie method
  wheelie(): string{
    return `Motorbike ${this.make} ${this.model} is doing a wheelie!`;// TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
  } 
  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    console.log(`This ${this.color} ${this.year} ${this.make}${this.model} has a weight of ${this.weight} lbs, can got up to ${this.topSpeed}mph, has ${this.wheels.length} wheels and the vin number ${this.vin}`);
  }

  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
}

// Export the Motorbike class as the default export
export default Motorbike;
