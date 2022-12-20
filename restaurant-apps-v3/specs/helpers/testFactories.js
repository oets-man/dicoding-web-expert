import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter.js';
import FavoriteRestaurantIdb from '../../src/scripts/data/restaurant-idb.js';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
	await LikeButtonPresenter.init({
		likeButtonContainer: document.querySelector('#likeButtonContainer'),
		restaurant,
		favoriteRestaurant: FavoriteRestaurantIdb,
	});
};

export { createLikeButtonPresenterWithRestaurant };
