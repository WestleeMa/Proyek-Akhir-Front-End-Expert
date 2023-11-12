import itActsAsLikedRestaurantModel from './contract/likedRestoContract';

let likedResto = [];

const LikedRestoArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return likedResto.find((resto) => resto.id === id);
  },

  getAllRestaurant() {
    return likedResto;
  },

  putRestaurant(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurant(resto.id)) {
      return;
    }

    likedResto.push(resto);
  },

  deleteLikedResto(id) {
    likedResto = likedResto.filter((resto) => resto.id !== id);
  },
};

describe('Liked Resto Array Contract Test Implementation', () => {
  afterEach(() => likedResto = []);

  itActsAsLikedRestaurantModel(LikedRestoArray);
});
