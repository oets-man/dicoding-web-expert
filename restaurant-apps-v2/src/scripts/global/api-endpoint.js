import CONFIG from './config';

const API_ENDPOINT = {
	LIST: `${CONFIG.BASE_URL}/list`,
	DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
	IMAGE_SMALL: `${CONFIG.BASE_URL}/images/small`,
	IMAGE_MEDIUM: `${CONFIG.BASE_URL}/images/medium`,
	REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
