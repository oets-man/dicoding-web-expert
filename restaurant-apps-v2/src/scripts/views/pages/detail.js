import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import API_ENDPOINT from '../../global/api-endpoint';
import css from './detail.css';
const Detail = {
	async render() {
		return `
        <h2>Detail Restoran</h2>
        <div class="container" id="card-container"></div>
      `;
	},

	async afterRender() {
		const cardContainer = document.querySelector('#card-container');
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const restaurant = await RestaurantSource.detailRestaurant(url.id);
		console.log(restaurant);
		cardContainer.innerHTML = `
			<style>${css}</style>
			<img src="${API_ENDPOINT.IMAGE_MEDIUM}/${restaurant.pictureId}" alt="gambar restoran">
			<div class="detail">
				<h3>${restaurant.name}</h3>
				<p>${restaurant.address} ${restaurant.city.toUpperCase()}</p>
				<p>⭐️${restaurant.rating}</p>
			</div>
		`;
	},
};

export default Detail;
