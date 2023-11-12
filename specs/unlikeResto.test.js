import LikedRestoIdb from '../src/scripts/data/resto-idb';
import createLikeButtonPresenterWithResto from './helpers/testFactories';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));
describe('Unliking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await LikedRestoIdb.putRestaurant({
      id: 1,
    });
  });

  afterEach(async () => {
    await LikedRestoIdb.deleteLikedResto(1);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like"]'))
      .toBeFalsy();
  });
  it('should be able to remove liked resto from the list', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });
    await LikedRestoIdb.deleteLikedResto(1);
    document.querySelector('[aria-label="unlike"]').dispatchEvent(new Event('click'));
    expect(await LikedRestoIdb.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });
    // hapus dulu resto dari daftar resto yang disukai
    await LikedRestoIdb.deleteLikedResto(1);
    // kemudian, simulasikan pengguna menekan widget batal menyukai resto
    document.querySelector('[aria-label="unlike"]').dispatchEvent(new Event('click'));
    expect(await LikedRestoIdb.getAllRestaurant()).toEqual([]);
  });
});
