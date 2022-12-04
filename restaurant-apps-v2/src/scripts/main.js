import './views/components/my-card';
import RestaurantSource from './data/restaurant-source';

const main = () => {
	const cardContainer = document.querySelector('#card-container');
	const urlPicture = 'https://restaurant-api.dicoding.dev/images/small';
	const start = async () => {
		try {
			const results = await RestaurantSource.getAll();
			const { restaurants } = results;
			for (const [index, restaurant] of restaurants.entries()) {
				setTimeout(() => {
					restaurant.picture = `${urlPicture}/${restaurant.pictureId}`;
					const myCard = document.createElement('my-card');
					myCard.item = restaurant;
					cardContainer.appendChild(myCard);
				}, 250 * index);
			}
		} catch (error) {
			alert(error);
		}
	};

	window.addEventListener('load', start);
};

export { main };
