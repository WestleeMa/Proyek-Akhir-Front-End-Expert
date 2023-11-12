import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import LikedRestoIdb from '../../src/scripts/data/resto-idb';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    likedResto: LikedRestoIdb,
    resto,
  });
};

export default createLikeButtonPresenterWithResto;
