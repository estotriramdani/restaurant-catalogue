import FavoriteRestaurant from '../../data/favorite-restaurant';
import CONFIG from '../../globals/config';

const Like = {
  async render() {
    return `
    <div class="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.restaurant-list');

    const exploreTitle = document.querySelector('.explore-title');
    const exploreSubtitle = document.querySelector('.explore-subtitle');
    exploreTitle.innerHTML = 'Your Favorite Restaurant';
    exploreSubtitle.innerHTML = `See The List Then Visit Them!`;

    if (Object.keys(restaurants).length < 1) {
      restaurantsContainer.innerHTML = `
        <h2 style="color: #443850; text-align: center;">Go Like Some Restaurants!</h2>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += `
      <div class="card">
        <div class="card-img">
          <img
            src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
            alt="Nama restoran ini adalah ${restaurant.name}"
          />
        </div>
        <div class="card-heading">
          <h3 class="card-title">${restaurant.name}</h3>
        </div>
        <div class="card-subheading">
          <p class="location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
              />
              <path
                d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
            ${restaurant.city}
          </p>
          <p class="rating">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
              />
            </svg>
            ${restaurant.rating}
          </p>
        </div>
        <div class="card-body">
          <p class="rest-desc">
            ${restaurant.description}
          </p>
          <div class="blank">... </div>
        </div>
        <div class="card-button">
        <a href="${`/#/detail/${restaurant.id}`}">TAKE ME THERE!</a>
        </div>
      </div>
      `;
    });
  },
};

export default Like;
