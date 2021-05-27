import FavoriteRestaurant from '../../data/favorite-restaurant';
import removePreloader from '../../utils/remove-preloader';
import { restaurantsLiked } from '../template/template-creator';

const Like = {
  async render() {
    return `
    <div class="restaurant-list"></div>
    <div class="preloader"><div id="loading"></div></div>
    `;
  },

  async afterRender() {
    removePreloader();

    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.restaurant-list');

    const exploreTitle = document.querySelector('.explore-title');
    const exploreSubtitle = document.querySelector('.explore-subtitle');
    exploreTitle.innerHTML = 'Your Favorite Restaurant';
    exploreSubtitle.innerHTML = 'See The List Then Visit Them!';

    if (Object.keys(restaurants).length < 1) {
      restaurantsContainer.innerHTML = `
        <h2 style="color: #443850; text-align: center;">Go Like Some Restaurants!</h2>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restaurantsLiked(restaurant);
    });
  },
};

export default Like;
