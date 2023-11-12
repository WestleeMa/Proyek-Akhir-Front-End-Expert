import { tombolLike, tombolUnlike } from '../views/template/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, likedResto, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._likedResto = likedResto;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;
    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await this._likedResto.getRestaurant(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = tombolLike();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._likedResto.putRestaurant(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = tombolUnlike();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._likedResto.deleteLikedResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
