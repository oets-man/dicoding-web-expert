import FavoriteRestaurantIdb from '../src/scripts/data/restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
	const addLikeButtonContainer = () => {
		document.body.innerHTML = '<div id="likeButtonContainer"></div>';
	};

	beforeEach(async () => {
		addLikeButtonContainer();
		await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
	});

	afterEach(async () => {
		await FavoriteRestaurantIdb.deleteRestaurant(1);
	});

	it('should display unlike widget when the restaurant has been liked', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
		expect(document.querySelector('[aria-label="Hapus dari daftar favorit"]')).toBeTruthy();
	});

	it('should not display like widget when the restaurant has been liked', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
		expect(document.querySelector('[aria-label="Favoritkan restoran ini"]')).toBeFalsy();
	});

	it('should be able to remove liked restaurant from the list', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

		document.querySelector('[aria-label="Hapus dari daftar favorit"]').dispatchEvent(new Event('click'));
		expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
	});

	it('should not throw error if the unliked restaurant is not in the list', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

		// hapus dulu film dari daftar film yang disukai
		await FavoriteRestaurantIdb.deleteRestaurant(1);
		// kemudian, simulasikan pengguna menekan widget batal menyukai film
		document.querySelector('[aria-label="Hapus dari daftar favorit"]').dispatchEvent(new Event('click'));
		expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
	});
});
