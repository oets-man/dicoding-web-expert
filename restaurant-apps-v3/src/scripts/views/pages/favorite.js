import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import API_ENDPOINT from '../../global/api-endpoint';

const Favorite = {
	async render() {
		document.querySelector('#hero').style.display = 'flex';
		return `
        <h2>Daftar Favorite</h2>
		<div class="card-container" id="card-container"></div>
      `;
	},

	async afterRender() {
		const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
		const cardContainer = document.querySelector('#card-container');
		if (restaurants.length == 0) {
			cardContainer.style.display = 'block';
			cardContainer.innerHTML = '<p class="error" role="alert">Tidak ada data untuk ditampilkan. Silakan favoritkan beberapa restoran!</p>';
			return;
		}

		for (const [index, restaurant] of restaurants.entries()) {
			setTimeout(() => {
				restaurant.picture = `${API_ENDPOINT.IMAGE_SMALL}/${restaurant.pictureId}`;
				const myCard = document.createElement('my-card');
				myCard.item = restaurant;
				cardContainer.appendChild(myCard);
			}, 250 * index);
		}
	},
};

export default Favorite;
