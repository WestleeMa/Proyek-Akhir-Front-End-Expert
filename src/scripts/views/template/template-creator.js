import CONFIG from '../../globals/config';

const tampilItemResto = (item) => `
    <div class='cardRestoran'>
      <a id="linkResto" href='/#/detail/${item.id}'>
      <img
        class="lazyload"
        crossorigin="anonymous"
        src='${CONFIG.BASE_IMAGE_URL}/medium/${item.pictureId}'
        alt='${item.name}'
        width="480"
        height="320"
      />
      <div class='kontenCard'>
        <h2 class="title_resto">${item.name}</h2>
        <p>${item.description}</p>
        <p>Kota: ${item.city}</p>
        <p>Rating: <b>${item.rating}</b></p>
        <span>Click to see details</span>
      </div>
      </a>
    </div>
`;

const tampilDetailResto = (item) => `
      <h1>Informasi Tentang Resto Ini</h1>
      <img
        class="lazyload"
        crossorigin="anonymous"
        src='${CONFIG.BASE_IMAGE_URL}/large/${item.pictureId}'
        alt='${item.name}'
        width="748"
        height="484"
      />
      <div class='kontenDetail'>
        <h1>${item.name}</h1>
        <p>${item.description}</p>
        <p>Kota: ${item.city}</p>
        <p>Alamat: ${item.address}</p>
        <div class='detailMenu'>
          <h2>Menu(s)</h2>
          <h3>Food(s)</h3>
          <ul id='detailFood'>
          ${item.menus.foods.map((foods) => `<li>${foods.name}</li>`).join('')}
          </ul>
          <h3>Drink(s)</h3>
          <ul id='detailDrink'>
          ${item.menus.drinks.map((drinks) => `<li>${drinks.name}</li>`).join('')}
          </ul>
        </div>
        <p>Rating: <b>${item.rating}</b></p>
        <div class='reviewResto'>
        <h2>Review(s)</h2>
        ${item.customerReviews.map((review) => `
        <div class='cardReview'>
          <h3 id="namaReviewer">${review.name}</h3>
          <p id="ulasanReviewer">${review.review}</p>
          <p><small>${review.date}</small></p>
        </div>
        `).join('')}
        </div> 
      </div>
`;

const tombolLike = () => `
  <button aria-label="like" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const tombolUnlike = () => `
  <button aria-label="unlike" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  tampilItemResto,
  tampilDetailResto,
  tombolLike,
  tombolUnlike,
};
