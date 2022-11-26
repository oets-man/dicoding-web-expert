import '../component/my-card';
import { DataSource } from './data-source';
// import ProgressBar from 'progressbar.js';

import '../component/my-card';
const main = () => {
	const cardContainer = document.querySelector('#card-container');
	// const elProgress = document.querySelector('#progress');

	// config alertify
	// alertify.defaults.theme.ok = 'btn btn-primary';
	// alertify.defaults.theme.cancel = 'btn btn-danger';
	// alertify.defaults.theme.input = 'form-control';

	// const renderCount = (count = 0) => {
	// 	elCount.innerHTML = `Menampilkan <strong>${count}</strong> data`;
	// };

	// const removeChildNode = (parent) => {
	// 	while (parent.hasChildNodes()) {
	// 		parent.removeChild(parent.firstChild);
	// 	}
	// };

	// const renderResult = async (results) => {
	// 	elProgress.style.display = 'none';
	// 	removeChildNode(elProgress);
	// 	removeChildNode(elContainer);
	// 	const bar = new ProgressBar.Line(elProgress, {
	// 		strokeWidth: 4,
	// 		easing: 'easeInOut',
	// 		color: '#333',
	// 		trailColor: '#fff',
	// 		trailWidth: 1,
	// 		svgStyle: { width: '100%', height: '100%' },
	// 	});

	// 	renderCount();
	// 	const { keyword, error, message, items } = results;
	// 	elKeyword.innerHTML = `Hasil pencarian dari <q><strong>${keyword}</strong></q>`;

	// 	if (error) return fallbackResult(message);

	// 	removeAlert();
	// 	if (items) {
	// 		elProgress.style.display = 'block';
	// 		const options = { headers: { Authorization: token() } };
	// 		for (let i = 0; i < items.length; i++) {
	// 			if (breakLooping) break;
	// 			const item = items[i];
	// 			const axiosGet = await axios.get(`https://api.github.com/users/${item.login}`, options);
	// 			const user = axiosGet.data;
	// 			const elItem = document.createElement('my-card');
	// 			elItem.item = user;
	// 			elContainer.appendChild(elItem);
	// 			bar.animate((i + 1) / items.length); // Number from 0.0 to 1.0
	// 			renderCount(i + 1);
	// 		}
	// 	}
	// };

	// const fallbackResult = (message) => {
	// 	const elAlert = document.createElement('div');
	// 	elAlert.classList.add('alert', 'alert-danger', 'col-11', 'mx-auto', 'text-center');
	// 	elAlert.innerHTML = message;

	// 	containerSearch.appendChild(elAlert);
	// };

	// const removeAlert = () => {
	// 	const elements = document.querySelectorAll('.alert-danger');
	// 	elements.forEach((element) => {
	// 		element.remove();
	// 	});
	// };

	const start = async () => {
		try {
			const results = await DataSource.getRestaurant();
			const { restaurants } = results;
			for (const restaurant of restaurants) {
				restaurant.picture = `https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}`;
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
