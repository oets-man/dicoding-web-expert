import RestaurantApi from '../../data/restaurant-api';
import UrlParser from '../../routes/url-parser';
import API_ENDPOINT from '../../global/api-endpoint';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import '../components/review-card';
import { createReviewForm } from './template-creator';

const Detail = {
	async render() {
		document.querySelector('#hero').style.display = 'none';
		return '<div class="detail-container" id="detail-container"></div>';
	},

	async afterRender() {
		const detailContainer = document.querySelector('#detail-container');
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const restaurant = await RestaurantApi.detailRestaurant(url.id);
		const categoriesJoin = restaurant.categories.map((category) => [category.name].join(' ')).join('; ');
		const drinksJoin = restaurant.menus.drinks.map((drink) => [drink.name].join(' ')).join('; ');
		const foodsJoin = restaurant.menus.foods.map((food) => [food.name].join(' ')).join('; ');
		const { customerReviews } = restaurant;
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
			<div class="form-review-container" id="form-review-container"></div>
		`;

		customerReviews.forEach((review) => {
			const card = document.createElement('review-card');
			card.item = review;
			document.querySelector('#reviews').appendChild(card);
		});

		document.querySelector('#form-review-container').innerHTML = createReviewForm(restaurant.id);

		const likeButtonContainer = document.querySelector('#likeButtonContainer');
		LikeButtonInitiator.init({ likeButtonContainer, restaurant });

		this.handleClickReview(document.querySelector('#form-review'));
	},

	handleClickReview(form) {
		form.addEventListener('submit', async (e) => {
			e.preventDefault();
			const data = new FormData(form);
			const post = await RestaurantApi.addReview(data);
			if (!post.error) {
				const { customerReviews } = post;
				const reviews = document.querySelector('#reviews');
				customerReviews.forEach((review) => {
					const reviewCard = document.createElement('review-card');
					reviewCard.item = review;
					reviews.appendChild(reviewCard);
				});
				form.reset();
				alert('Terima kasih telah memberikan komentar.');
			}
		});
	},
};

export default Detail;
