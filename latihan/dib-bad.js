class SQLDatabase {
	constructor() {
		this.connection = 'SQLConnection';
	}
	requestItem(item) {
		// ....
	}
}
class ProductTracker {
	constructor(items) {
		this._items = items;
		// BAD: Kita membuat ketergantungan terhadap low-level.
		// Seharusnya high-level modul tidak boleh tahu low-level itu siapa.
		this._database = new SQLDatabase();
	}
	requestItems() {
		this._items.forEach((item) => {
			this._database.requestItem(item);
		});
	}
}
const productTracker = new ProductTracker(['A011', 'B032', 'F311']);
productTracker.requestItems();
