import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import API_ENDPOINT from '../../global/api-endpoint';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import '../components/review-card';
import { createReviewForm } from './template-creator';

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
		const categoriesJoin = restaurant.categories.map((category) => [category.name].join(' ')).join('; ');
		const drinksJoin = restaurant.menus.drinks.map((drink) => [drink.name].join(' ')).join('; ');
		const foodsJoin = restaurant.menus.foods.map((food) => [food.name].join(' ')).join('; ');
		const { customerReviews } = restaurant;
		// console.log(restaurant);
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
			<div class="reviews-container">
				<h4>Apa Kata Mereka</h4>
				<div class="reviews" id="reviews"></div>
			</div>
			<div class="post-reviews" id="post-reviews"></div>
		`;
		const reviews = document.querySelector('#reviews');
		customerReviews.forEach((review) => {
			const card = document.createElement('review-card');
			card.item = review;
			reviews.appendChild(card);
		});

		document.querySelector('#post-reviews').innerHTML = createReviewForm(restaurant.id);
		const likeButtonContainer = document.querySelector('#likeButtonContainer');
		LikeButtonInitiator.init({ likeButtonContainer, restaurant });
		document.querySelector('#hero').style.display = 'none';

		this.handleClickReview(document.querySelector('#form-review'));
	},

	handleClickReview(form) {
		form.addEventListener('submit', async (e) => {
			e.preventDefault();
			const data = new FormData(form);
			const post = await RestaurantSource.addReview(data);
			if (!post.error) {
				const { customerReviews } = post;
				const reviews = document.querySelector('#reviews');
				customerReviews.forEach((review) => {
					const card = document.createElement('review-card');
					card.item = review;
					reviews.appendChild(card);
				});
				form.reset();
				alert('Terima kasih telah memberikan komentar.');
			}
		});
	},
};

export default Detail;
