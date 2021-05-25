import DicodingRestaurantSource from '../../data/dicoding-restaurant';
import removePreloader from '../../utils/remove-preloader';
import { skeletonCard, restaurantCards } from '../template/template-creator';

const AllRestaurant = {
  async render() {
    return `
      
      <div class="restaurant-list">
      ${skeletonCard()}
      ${skeletonCard()}
      ${skeletonCard()}
      ${skeletonCard()}
      </div>
      
    `;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantSource.allRestaurants();
    const restaurantsContainer = document.querySelector('.restaurant-list');
    for (let index = 0; index < 5; index++) {
      restaurantsContainer.innerHTML += skeletonCard();
    }
    const exploreTitle = document.querySelector('.explore-title');
    const exploreSubtitle = document.querySelector('.explore-subtitle');

    exploreTitle.innerHTML = 'Explore Restaurant';
    exploreSubtitle.innerHTML = 'Find  Restaurant You Love The Most';

    setTimeout(() => {
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += restaurantCards(restaurant);
      });
    }, 1000);
  },
};

export default AllRestaurant;
