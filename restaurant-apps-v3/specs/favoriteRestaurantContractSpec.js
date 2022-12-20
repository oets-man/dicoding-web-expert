import FavoriteRestaurantIdb from '../src/scripts/data/restaurant-idb';
import FavoriteRestaurantArray from './helpers/favoriteRestaurantArray';

const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
	it('should return the restaurant that has been added', async () => {
		favoriteRestaurant.putRestaurant({ id: 1 });
		favoriteRestaurant.putRestaurant({ id: 2 });

		expect(await favoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
		expect(await favoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
		expect(await favoriteRestaurant.getRestaurant(3)).toEqual(undefined);
	});

	it('should refuse a restaurant from being added if it does not have the correct property', async () => {
		favoriteRestaurant.putRestaurant({ aProperty: 'property' });
		expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
	});

	it('can return all of the restaurant that have been added', async () => {
		favoriteRestaurant.putRestaurant({ id: 1 });
		favoriteRestaurant.putRestaurant({ id: 2 });
		expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }]);
	});

	it('should remove favorite restaurant', async () => {
		favoriteRestaurant.putRestaurant({ id: 1 });
		favoriteRestaurant.putRestaurant({ id: 2 });
		favoriteRestaurant.putRestaurant({ id: 3 });

		await favoriteRestaurant.deleteRestaurant(1);
		expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 2 }, { id: 3 }]);
	});

	it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
		favoriteRestaurant.putRestaurant({ id: 1 });
		favoriteRestaurant.putRestaurant({ id: 2 });
		favoriteRestaurant.putRestaurant({ id: 3 });
		await favoriteRestaurant.deleteRestaurant(4);
		expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
	});

	it('should be able to search for restaurant', async () => {
		favoriteRestaurant.putRestaurant({ id: 1, title: 'warung a' });
		favoriteRestaurant.putRestaurant({ id: 2, title: 'warung b' });
		favoriteRestaurant.putRestaurant({ id: 3, title: 'warung abc' });
		favoriteRestaurant.putRestaurant({ id: 4, title: 'ini mah warung abcd' });
		expect(await favoriteRestaurant.searchRestaurants('warung a')).toEqual([
			{ id: 1, title: 'warung a' },
			{ id: 3, title: 'warung abc' },
			{ id: 4, title: 'ini mah warung abcd' },
		]);
	});
};

describe('Favorite Restaurant Contract Test Implementation', () => {
	describe('~Array~', () => {
		afterEach(async () => {
			FavoriteRestaurantArray.getAllRestaurants().forEach(async (restaurant) => {
				FavoriteRestaurantArray.deleteRestaurant(restaurant.id);
			});
		});
		itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
	});

	describe('~IndexedDB~', () => {
		afterEach(async () => {
			(await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
				await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
			});
		});
		itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
	});
});
