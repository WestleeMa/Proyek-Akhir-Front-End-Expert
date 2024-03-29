import LikedRestoIdb from '../src/scripts/data/resto-idb';
import createLikeButtonPresenterWithResto from './helpers/testFactories';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));
describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the resto has not been liked before', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like"]')).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await LikedRestoIdb.getRestaurant(1);

    expect(resto).toEqual({
      id: 1,
    });

    LikedRestoIdb.deleteLikedResto(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await LikedRestoIdb.putRestaurant({
      id: 1,
    });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // tidak ada film yang ganda
    expect(await LikedRestoIdb.getAllRestaurant()).toEqual([{
      id: 1,
    }]);

    LikedRestoIdb.deleteLikedResto(1);
  });

  // menggunakan metode xit, bukan it
  it('should not add a resto when it has no id', async () => {
    await createLikeButtonPresenterWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await LikedRestoIdb.getAllRestaurant()).toEqual([]);
  });
});
