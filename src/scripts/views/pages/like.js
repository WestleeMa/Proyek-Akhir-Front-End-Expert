import LikedRestoIdb from '../../data/resto-idb';
import { tampilItemResto } from '../template/template-creator';

const Like = {
  async render() {
    return `
          <div class="restoran">
            <h1>Restoran yang Anda Sukai</h1>
            <div class="kontenRestoran" id="kontenRestoran"></div>
          </div>
        `;
  },

  async afterRender() {
    const dataLikedResto = await LikedRestoIdb.getAllRestaurant();
    const restoContainer = document.querySelector('#kontenRestoran');

    if (dataLikedResto.length < 1) {
      restoContainer.innerHTML += '<p class="no_like">Belum ada resto yang Anda sukai :(</p>';
    }

    dataLikedResto.forEach((resto) => {
      restoContainer.innerHTML += tampilItemResto(resto);
    });
  },
};

export default Like;
