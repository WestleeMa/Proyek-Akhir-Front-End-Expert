import UrlParser from '../../routes/url-parser';
import RestaurantAPISource from '../../data/restauran-api-dicoding';
import { tampilDetailResto } from '../template/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import LikedRestoIdb from '../../data/resto-idb';

const Detail = {
  async render() {
    return `
      <div id='detailResto' class='detailResto'></div>
      <div id='tambahReview' class='reviewSection'>
      <h2>Review resto ini</h2>
        <form class="formReview">
          <label for="namaUser">Nama kamu</label>
          <input type="text" name="namaUser" id="namaUser">
          <label for="reviewUser">Review kamu</label>
          <textarea name="reviewUser" id="reviewUser" cols="50" rows="10"></textarea>
        </form>
        <button id="addReview">Submit</button>
      </div>
      <div id='likeButtonContainer'></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailResto = await RestaurantAPISource.detailRestaurant(url.id);
    const detailRestoContainer = document.querySelector('#detailResto');
    detailRestoContainer.innerHTML = tampilDetailResto(detailResto);
    const tombolReview = document.getElementById('addReview');

    tombolReview.addEventListener('click', async () => {
      const namaUser = await document.getElementById('namaUser').value;
      const reviewUser = await document.getElementById('reviewUser').value;
      if (namaUser && reviewUser) {
        await RestaurantAPISource.reviewRestaurant(
          detailResto.id,
          namaUser,
          reviewUser,
        );
      } else {
        alert('Tolong lengkapi form review.');
      }
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      likedResto: LikedRestoIdb,
      resto: {
        id: detailResto.id,
        name: detailResto.name,
        description: detailResto.description,
        city: detailResto.city,
        pictureId: detailResto.pictureId,
        rating: detailResto.rating,
      },
    });
  },
};

export default Detail;
