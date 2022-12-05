import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import API_ENDPOINT from '../../global/api-endpoint';
// import { createLikeButtonTemplate } from './template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
	async render() {
		return `
        <h2>Detail Restoran</h2>
        <div class="detail-container" id="detail-container"></div>
		
      `;
	},

	async afterRender() {
		const detailContainer = document.querySelector('#detail-container');
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const restaurant = await RestaurantSource.detailRestaurant(url.id);
		console.log(restaurant);
		const categoriesJoin = restaurant.categories.map((category) => [category.name].join(' ')).join('; ');
		const drinksJoin = restaurant.menus.drinks.map((drink) => [drink.name].join(' ')).join('; ');
		const foodsJoin = restaurant.menus.foods.map((food) => [food.name].join(' ')).join('; ');

		detailContainer.innerHTML = `
			<div class="img-container">
				<img src="${API_ENDPOINT.IMAGE_MEDIUM}/${restaurant.pictureId}" alt="gambar restoran">
				<p class="rating">⭐️ ${parseFloat(restaurant.rating).toFixed(1)}</p>
			</div>
			<div class="detail">
				<h3>${restaurant.name}</h3>
				<p class="address">${restaurant.address} ${restaurant.city.toUpperCase()}</p>
				<p class="categories">Masakan ${categoriesJoin}</p>
				<h4>Makanan</h4>
				<p class="menus">${foodsJoin}</p>
				<h4>Minuman</h4>
				<p class="menus">${drinksJoin}</p>
				<p class="description">${restaurant.description}</p>
			</div>
			<div id="likeButtonContainer"></div>
		`;
		const likeButtonContainer = document.querySelector('#likeButtonContainer');
		// likeButtonContainer.innerHTML = createLikeButtonTemplate();
		LikeButtonInitiator.init({ likeButtonContainer, restaurant });
	},
};

export default Detail;
