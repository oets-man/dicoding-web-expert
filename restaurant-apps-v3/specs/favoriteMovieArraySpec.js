import { itActsAsFavoriteRestaurantModel } from './contract/favoriteMovieContract';
let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
	getRestaurant(id) {
		if (!id) {
			return;
		}

		return favoriteRestaurants.find((restaurant) => restaurant.id == id);
	},

	getAllRestaurants() {
		return favoriteRestaurants;
	},

	putRestaurant(restaurant) {
		if (!restaurant.hasOwnProperty('id')) {
			return;
		}

		// pastikan id ini belum ada dalam daftar favorite
		if (this.getRestaurant(restaurant.id)) {
			return;
		}

		favoriteRestaurants.push(restaurant);
	},

	deleteRestaurant(id) {
		// cara boros menghapus film dengan meng-copy film yang ada
		// kecuali film dengan id == id
		favoriteRestaurants = favoriteRestaurants.filter((movie) => movie.id != id);
	},

	// searchRestaurants(query) {
	// 	return this.getAllRestaurant().filter((movie) => {
	// 		const loweredCaseMovieTitle = (movie.title || '-').toLowerCase();
	// 		const jammedMovieTitle = loweredCaseMovieTitle.replace(/\s/g, '');
	// 		const loweredCaseQuery = query.toLowerCase();
	// 		const jammedQuery = loweredCaseQuery.replace(/\s/g, '');
	// 		return jammedMovieTitle.indexOf(jammedQuery) != -1;
	// 	});
	// },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
	afterEach(() => (favoriteRestaurants = []));

	itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
