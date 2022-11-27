import '../component/my-card';
import { DataSource } from './data-source';

const main = () => {
	const cardContainer = document.querySelector('#card-container');
	const urlPicture = 'https://restaurant-api.dicoding.dev/images/small';
	const start = async () => {
		try {
			const results = await DataSource.getRestaurant();
			const { restaurants } = results;
			for (const restaurant of restaurants) {
				restaurant.picture = `${urlPicture}/${restaurant.pictureId}`;
				const myCard = document.createElement('my-card');
				myCard.item = restaurant;
				cardContainer.appendChild(myCard);
			}
		} catch (error) {
			alert(error);
		}
	};

	window.addEventListener('load', start);
};

export { main };
