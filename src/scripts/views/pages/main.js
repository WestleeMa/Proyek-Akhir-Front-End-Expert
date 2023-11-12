import RestaurantAPISource from '../../data/restauran-api-dicoding';
import { tampilItemResto } from '../template/template-creator';

const AllResto = {
  async render() {
    return `
    <div class="jumbo">
      <div class="jumboContent">
        <h1>Selamat datang di <span class="logo">RestoKu</span>!</h1>
        <p>Sebuah Portal Pemersatu Restoran</p>
      </div>
    </div>
    
    <div class="restoran">
      <h1>Temukkan restoran favorit Anda disini</h1>
      <div class="kontenRestoran" id="kontenRestoran"></div>
    </div>
    `;
  },

  async afterRender() {
    const dataAllResto = await RestaurantAPISource.daftarRestaurant();
    const restoContainer = document.querySelector('#kontenRestoran');

    if (dataAllResto.length < 1) {
      restoContainer.innerHTML += '<p class="no_resto">Tidak ada restoran untuk ditampilkan</p>';
    }

    dataAllResto.forEach((item) => {
      restoContainer.innerHTML += tampilItemResto(item);
    });
  },
};

export default AllResto;
