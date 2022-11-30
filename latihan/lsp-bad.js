class Vehicle {
	constructor() {
		if (this.constructor === Vehicle) {
			throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
		}
	}
	droveOff() {
		throw new TypeError('Abstract method, cannot be access directly.');
	}
	turnOnEngine() {
		throw new TypeError('Abstract method, cannot be access directly.');
	}
}
class Car extends Vehicle {
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
	turnOnEngine() {
		// Tunggu, sepeda kan tidak memiliki mesin? Bagaimana cara menyalakannya?
		throw new Error(`${this.constructor.name} don't have an engine`);
	}
}
