import CONFIG from './config';

const API_ENDPOINT = {
	LIST: `${CONFIG.BASE_URL}/list`,
	// DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
	IMAGE_SMALL: `${CONFIG.BASE_URL}/images/small`,
};

export default API_ENDPOINT;
