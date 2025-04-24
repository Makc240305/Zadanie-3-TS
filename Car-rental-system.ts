class Car {
    constructor(public brand: string, public model: string, public available: boolean = true) {}
  }
  
  class Rental {
    constructor(
      public car: Car,
      public customer: CustomerRental,
      public days: number,
      public cost: number
    ) {}
  }
  
  class CustomerRental {
    public rentals: Rental[] = [];
  
    constructor(public name: string) {}
  
    rentCar(car: Car, days: number, costPerDay: number) {
      if (!car.available) throw new Error('Car not available');
      const cost = days * costPerDay;
      const rental = new Rental(car, this, days, cost);
      this.rentals.push(rental);
      car.available = false;
    }
  
    returnCar(car: Car) {
      car.available = true;
    }
  
    showRentalHistory() {
      console.log(`Rental history for ${this.name}:`);
      this.rentals.forEach((rental, index) => {
        console.log(`#${index + 1} - ${rental.car.brand} ${rental.car.model}, Days: ${rental.days}, Cost: ${rental.cost}`);
      });
    }
  }
  
  class CarRentalSystem {
    public cars: Car[] = [];
  
    addCar(car: Car) {
      this.cars.push(car);
    }
  
    getAvailableCars(): Car[] {
      return this.cars.filter(car => car.available);
    }
  }