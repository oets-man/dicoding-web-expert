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
}

export default RestaurantSource;
