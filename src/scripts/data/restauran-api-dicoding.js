import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantAPISource {
  static async daftarRestaurant() {
    const response = await fetch(API_ENDPOINT.ALL_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async reviewRestaurant(id, name, review) {
    const response = await fetch(API_ENDPOINT.REVIEW_RESTO, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        name,
        review,
      }),
    });
    const responseJson = await response.json();
    alert(responseJson.message);
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantAPISource;
