import CONFIG from './config';

const API_ENDPOINT = {
  ALL_RESTO: `${CONFIG.BASE_URL}/list`,
  REVIEW_RESTO: `${CONFIG.BASE_URL}/review`,
  DETAIL_RESTO: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;
