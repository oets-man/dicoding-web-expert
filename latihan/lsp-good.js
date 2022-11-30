class Vehicle {
	constructor() {
		if (this.constructor === Vehicle) {
			throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
		}
	}
	droveOff() {
		throw new TypeError('Abstract method, cannot be access directly.');
	}
}
class MotorVehicle extends Vehicle {
	constructor() {
		super();
		if (this.constructor === MotorVehicle) {
			throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
		}
	}
	turnOnEngine() {
		throw new TypeError('Abstract method, cannot be access directly.');
	}
}
class Car extends MotorVehicle {
	droveOff() {
		console.log('Mobil melaju!');
	}
	turnOnEngine() {
		console.log('Mesin Mobil dinyalakan');
	}
}
class Bicycle extends Vehicle {
	droveOff() {
		console.log('Sepeda melaju!');
	}
}
const a = new Vehicle();
console.log(a.droveOff());
