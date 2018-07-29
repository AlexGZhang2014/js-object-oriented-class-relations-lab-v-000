let store = {drivers: [], trips: [], passengers: []}
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => trip.driverId === this.id);
  }

  passengers() {
    let trips = this.trips().map(trip => trip.passengerId);
    return store.passengers.filter(passenger => trips.includes(passenger.id));
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id);
  }

  drivers() {
    let trips = this.trips().map(trip => trip.driverId);
    return store.drivers.filter(driver => trips.includes(driver.id));
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  setDriver(driver) {
    this.driverId = driver.id;
  }

  setPassenger(passenger) {
    this.passengerId = passenger.id;
  }

  driver() {
    return store.drivers.find(driver => driver.id === this.driverId);
  }

  passenger() {
    return store.passengers.find(passenger => passenger.id === this.passengerId);
  }
}
