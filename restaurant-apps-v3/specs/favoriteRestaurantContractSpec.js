// import FavoriteRestaurant from '../src/scripts/data/restaurant-idb';
import FavoriteRestaurant from './helpers/favoriteRestaurantArray';
describe('Favorite Restaurant Array Contract Test Implementation', () => {
	afterEach(async () => {
		(await FavoriteRestaurant.getAllRestaurants()).forEach(async (restaurant) => {
			await FavoriteRestaurant.deleteRestaurant(restaurant.id);
		});
	});

	it('should return the restaurant that has been added', async () => {
		FavoriteRestaurant.putRestaurant({ id: 1 });
		FavoriteRestaurant.putRestaurant({ id: 2 });

		expect(await FavoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
		expect(await FavoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
		expect(await FavoriteRestaurant.getRestaurant(3)).toEqual(undefined);
	});

	fit('should refuse a restaurant from being added if it does not have the correct property', async () => {
		FavoriteRestaurant.putRestaurant({ aProperty: 'property' });
		expect(FavoriteRestaurant.getAllRestaurants()).toEqual([]);
	});

	xit('can return all of the restaurant that have been added', async () => {
		FavoriteRestaurant.putRestaurant({ id: 1 });
		FavoriteRestaurant.putRestaurant({ id: 2 });
		expect(FavoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }]);
	});

	xit('should remove favorite restaurant', async () => {
		FavoriteRestaurant.putRestaurant({ id: 1 });
		FavoriteRestaurant.putRestaurant({ id: 2 });
		FavoriteRestaurant.putRestaurant({ id: 3 });

		FavoriteRestaurant.deleteRestaurant(1);
		expect(FavoriteRestaurant.getAllRestaurants()).toEqual([{ id: 2 }, { id: 3 }]);
	});

	xit('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
		FavoriteRestaurant.putRestaurant({ id: 1 });
		FavoriteRestaurant.putRestaurant({ id: 2 });
		FavoriteRestaurant.putRestaurant({ id: 3 });
		FavoriteRestaurant.deleteRestaurant(4);
		expect(FavoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
	});

	xit('should be able to search for restaurant', async () => {
		FavoriteRestaurant.putRestaurant({ id: 1, title: 'warung a' });
		FavoriteRestaurant.putRestaurant({ id: 2, title: 'warung b' });
		FavoriteRestaurant.putRestaurant({ id: 3, title: 'warung abc' });
		FavoriteRestaurant.putRestaurant({ id: 4, title: 'ini mah warung abcd' });
		expect(FavoriteRestaurant.searchRestaurants('warung a')).toEqual([
			{ id: 1, title: 'warung a' },
			{ id: 3, title: 'warung abc' },
			{ id: 4, title: 'ini mah warung abcd' },
		]);
	});
});
