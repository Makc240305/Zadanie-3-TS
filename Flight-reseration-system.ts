class Flight {
    public reservations: Reservation[] = [];
  
    constructor(
      public flightNumber: string,
      public destination: string,
      public availableSeats: number
    ) {}
  
    reserveSeat(passenger: Passenger): Reservation | null {
      if (this.availableSeats <= 0) return null;
      const reservation = new Reservation(passenger, this, this.availableSeats);
      this.availableSeats--;
      this.reservations.push(reservation);
      passenger.reservations.push(reservation);
      return reservation;
    }
  
    cancelReservation(reservation: Reservation) {
      this.availableSeats++;
      this.reservations = this.reservations.filter(r => r !== reservation);
    }
  }
  
  class Passenger {
    public reservations: Reservation[] = [];
  
    constructor(public name: string) {}
  
    showReservations() {
      console.log(`Reservations for ${this.name}:`);
      this.reservations.forEach(r => {
        console.log(`Flight: ${r.flight.flightNumber} to ${r.flight.destination}, Seat: ${r.seatNumber}`);
      });
    }
  }
  
  class Reservation {
    constructor(public passenger: Passenger, public flight: Flight, public seatNumber: number) {}
  }
  
  class AirlineSystem {
    public flights: Flight[] = [];
  
    addFlight(flight: Flight) {
      this.flights.push(flight);
    }
  
    getAvailableFlights(): Flight[] {
      return this.flights.filter(f => f.availableSeats > 0);
    }
  }