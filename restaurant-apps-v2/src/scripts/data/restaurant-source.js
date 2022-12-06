import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';

class RestaurantSource {
	static getAll = async () => {
		try {
			const get = await axios.get(API_ENDPOINT.LIST);
			const response = get.data;
			if (response.error) return response.message;
			return response.restaurants;
		} catch (error) {
			return 'Cek koneksi internet Anda! \n' + error;
		}
	};

	static detailRestaurant = async (id) => {
		try {
			const get = await axios.get(API_ENDPOINT.DETAIL(id));
			const response = get.data;
			if (response.error) return response.message;
			return response.restaurant;
		} catch (error) {
			return 'Cek koneksi internet Anda! \n' + error;
		}
	};

	static addReview = async (data) => {
		const config = {
			method: 'post',
			url: API_ENDPOINT.REVIEW,
			headers: {
				'Content-Type': 'application/json',
			},
			// data: JSON.stringify(data),
			data: data,
		};

		try {
			const review = await axios(config);
			return review.data;
		} catch (error) {
			return 'Review gagal dikirim! \n' + error;
		}
	};
}

export default RestaurantSource;
