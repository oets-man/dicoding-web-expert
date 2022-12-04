import RestaurantSource from '../../data/restaurant-source';
import CONFIG from '../../globals/config';
import '../components/my-card';

const Home = {
	async render() {
		return `
        <h2>Daftar Restoran Indonesia</h2>
        <div class="container" id="card-container"></div>
      `;
	},

	async afterRender() {
		const cardContainer = document.querySelector('#card-container');
		try {
			const { restaurants } = await RestaurantSource.getAll();
			for (const [index, restaurant] of restaurants.entries()) {
				setTimeout(() => {
					restaurant.picture = `${CONFIG.BASE_IMAGE_URL_SMALL}/${restaurant.pictureId}`;
					const myCard = document.createElement('my-card');
					myCard.item = restaurant;
					cardContainer.appendChild(myCard);
				}, 250 * index);
			}
		} catch (error) {
			alert(error);
		}
	},
};

export default Home;
