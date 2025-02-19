// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// define the Cli class
class Cli {
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          // create a car
          this.createCar();
        } else if (answers.vehicleType === 'Truck') {
          this.createTruck();
        } else if (answers.vehicleType === 'Motorbike') {
          this.createMotorbike();
        }
      });
  }

  // method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontLeftWheelDiameter',
          message: 'Enter Front Left Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontLeftWheelBrand',
          message: 'Enter Front Left Wheel Brand',
        },
        {
          type: 'input',
          name: 'frontRightWheelDiameter',
          message: 'Enter Front Right Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontRightWheelBrand',
          message: 'Enter Front Right Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearLeftWheelDiameter',
          message: 'Enter Rear Left Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearLeftWheelBrand',
          message: 'Enter Rear Left Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearRightWheelDiameter',
          message: 'Enter Rear Right Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearRightWheelBrand',
          message: 'Enter Rear Right Wheel Brand',
        },
      ])
      .then((answers) => {
        const car = new Car(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [
            new Wheel(parseInt(answers.frontLeftWheelDiameter), answers.frontLeftWheelBrand),
            new Wheel(parseInt(answers.frontRightWheelDiameter), answers.frontRightWheelBrand),
            new Wheel(parseInt(answers.rearLeftWheelDiameter), answers.rearLeftWheelBrand),
            new Wheel(parseInt(answers.rearRightWheelDiameter), answers.rearRightWheelBrand)
          ]
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();

     });
  }

  // method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontLeftWheelDiameter',
          message: 'Enter Front Left Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontLeftWheelBrand',
          message: 'Enter Front Left Wheel Brand',
        },
        {
          type: 'input',
          name: 'frontRightWheelDiameter',
          message: 'Enter Front Right Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontRightWheelBrand',
          message: 'Enter Front Right Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearLeftWheelDiameter',
          message: 'Enter Rear Left Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearLeftWheelBrand',
          message: 'Enter Rear Left Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearRightWheelDiameter',
          message: 'Enter Rear Right Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearRightWheelBrand',
          message: 'Enter Rear Right Wheel Brand',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
      ])
      .then((answers) => {
         const truck = new Truck(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [
            new Wheel(parseInt(answers.frontLeftWheelDiameter), answers.frontLeftWheelBrand),
            new Wheel(parseInt(answers.frontRightWheelDiameter), answers.frontRightWheelBrand),
            new Wheel(parseInt(answers.rearLeftWheelDiameter), answers.rearLeftWheelBrand),
            new Wheel(parseInt(answers.rearRightWheelDiameter), answers.rearRightWheelBrand)
          ],
          parseInt(answers.towingCapacity)
        );
        
        this.vehicles.push(truck);
        this.selectedVehicleVin = truck.vin;
        this.performActions();
      });
  }

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers) => {
        const motorBike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [
            new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
            new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand)
          ]
        );

        this.vehicles.push(motorBike);
        this.selectedVehicleVin = motorBike.vin;
        this.performActions();
      });
  }

  // method to find a vehicle to tow
  findVehicleToTow(truck: Truck): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      .then((answers) => {
        const vehicleToTow = answers.vehicleToTow as Car | Truck | Motorbike;
        if (vehicleToTow === truck) {
          console.log("The truck cannot tow itself!");
          this.performActions();
        } else {
          truck.tow(vehicleToTow);
          this.performActions();
        }
      });
  }

  // method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Wheelie',
            'Tow',
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])
      .then((answers) => {
        for (let i = 0; i < this.vehicles.length; i++) {
          if (this.vehicles[i].vin === this.selectedVehicleVin) {
            const selectedVehicle = this.vehicles[i];
  
            if (answers.action === 'Print details') {
              selectedVehicle.printDetails();
            } else if (answers.action === 'Start vehicle') {
              selectedVehicle.start();
            } else if (answers.action === 'Accelerate 5 MPH') {
              selectedVehicle.accelerate(5);
            } else if (answers.action === 'Decelerate 5 MPH') {
              selectedVehicle.decelerate(5);
            } else if (answers.action === 'Stop vehicle') {
              selectedVehicle.stop();
            } else if (answers.action === 'Turn right') {
              selectedVehicle.turn('right');
            } else if (answers.action === 'Turn left') {
              selectedVehicle.turn('left');
            } else if (answers.action === 'Reverse') {
              selectedVehicle.reverse();
            } else if (answers.action === 'Wheelie') {
              if (selectedVehicle instanceof Motorbike) {
                selectedVehicle.wheelie(); 
              } else {
                console.log("Only motorbikes can perform a wheelie.");
              }
            } else if (answers.action === 'Tow') {
              if (selectedVehicle instanceof Truck) {
                this.findVehicleToTow(selectedVehicle); 
                return; 
              } else {
                console.log("Only trucks can tow another vehicle.");
              }
            } else if (answers.action === 'Select or create another vehicle') {
              this.startCli();
              return; 
            } else if (answers.action === 'Exit') {
              this.exit = true;
            }
          } 
        }
  
        if (!this.exit) {
          this.performActions();
        }
      }); 
  } 
  
  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;
