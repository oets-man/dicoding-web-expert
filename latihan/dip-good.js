class SQLDatabase {
	constructor() {
		this.connection = 'SQLConnection';
	}
	requestItem(item) {
		// ....
	}
}
class MongoDatabase {
	constructor() {
		this.connection = 'MongoConnection';
	}
	requestItem(item) {
		// ...
	}
}
class ProductTracker {
	constructor(items, database) {
		this._items = items;
		this._database = database;
	}
	requestItems() {
		this._items.forEach((item) => {
			this._database.requestItem(item);
		});
	}
}
const productTracker = new ProductTracker(
	['A011', 'B032', 'F311'],
	new MongoDatabase() // Good! Sekarang kita bisa gunakan modul low-level apa saja.
);
productTracker.requestItems();
