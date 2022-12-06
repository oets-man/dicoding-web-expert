import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import API_ENDPOINT from '../../global/api-endpoint';
// import { createLikeButtonTemplate } from './template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
	async render() {
		return `
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
			<div id="likeButtonContainer"></div>
		</div>
			<div class="content">
				<div class="header">
					<h3>${restaurant.name}</h3>
					<p class="address">${restaurant.address} ${restaurant.city.toUpperCase()}</p>
					<p class="categories">Masakan ${categoriesJoin}</p>
				</div>
				<div class="menus">
					<div class="foods">
						<h4>Makanan</h4>
						<p>${foodsJoin}</p>
					</div>
					<div class="drinks">
						<h4>Minuman</h4>
						<p>${drinksJoin}</p>
					</div>
				</div>
				<p class="description">${restaurant.description}</p>
			</div>
		`;
		const likeButtonContainer = document.querySelector('#likeButtonContainer');
		// likeButtonContainer.innerHTML = createLikeButtonTemplate();
		LikeButtonInitiator.init({ likeButtonContainer, restaurant });
		document.querySelector('#hero').style.display = 'none';
	},
};

export default Detail;
