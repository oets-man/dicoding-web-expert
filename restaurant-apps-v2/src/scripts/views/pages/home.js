import RestaurantApi from '../../data/restaurant-api';
import API_ENDPOINT from '../../global/api-endpoint';
import '../components/my-card';

const Home = {
	async render() {
		return `
        <h2>Daftar Restoran Indonesia</h2>
        <div class="card-container" id="card-container"></div>
      `;
	},

	async afterRender() {
		const cardContainer = document.querySelector('#card-container');
		try {
			const restaurants = await RestaurantApi.getAll();
			if (!restaurants) return;
			for (const [index, restaurant] of restaurants.entries()) {
				setTimeout(() => {
					restaurant.picture = `${API_ENDPOINT.IMAGE_SMALL}/${restaurant.pictureId}`;
					const myCard = document.createElement('my-card');
					myCard.item = restaurant;
					cardContainer.appendChild(myCard);
				}, 250 * index);
			}
		} catch (error) {
			cardContainer.innerHTML = `<p>${error}</p>`;
		}
		document.querySelector('#hero').style.display = '';
	},
};

export default Home;
