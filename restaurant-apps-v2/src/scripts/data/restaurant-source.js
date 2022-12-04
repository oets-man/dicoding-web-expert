import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
	static getAll = async () => {
		console.log(API_ENDPOINT.LIST);
		try {
			const get = await axios.get(API_ENDPOINT.LIST);
			const response = get.data;
			if (!response.error) {
				return {
					count: response.count,
					restaurants: response.restaurants,
				};
			}
			return {
				message: response.message,
			};
		} catch (error) {
			return {
				message: 'Cek koneksi internet Anda!',
				error,
			};
		}
	};
}

export default RestaurantSource;
