import itActsAsLikedRestaurantModel from './contract/likedRestoContract';
import LikedRestoIdb from '../src/scripts/data/resto-idb';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));
describe('Liked Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await LikedRestoIdb.getAllRestaurant()).forEach(async (resto) => {
      await LikedRestoIdb.deleteLikedResto(resto.id);
    });
  });

  itActsAsLikedRestaurantModel(LikedRestoIdb);
});
