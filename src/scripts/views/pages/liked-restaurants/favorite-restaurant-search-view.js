import { restaurantCards } from '../../template/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="content">
        <div id="restaurant-search-container">
            <input id="query" type="text">
            <div class="restaurant-result-container">
                <ul class="restaurants">
                </ul>
            </div>
        </div>
      </div>
        `;
  }

  getFavoriteMovieTemplate() {
    return `
       <div class="content">
           <h2 class="content__heading">Your Liked Restaurant</h2>
           <div id="restaurants" class="restaurants">
           </div>
       </div>
       `;
  }

  showRestaurants(restaurants) {
    let html;
    if (restaurants.length > 0) {
      html = restaurants.reduce(
        (carry, restaurant) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          carry.concat(
            `<li class="restaurant"><span class="restaurant__title">${
              restaurant.title || '-'
            }</span></li>`
          ),
        ''
      );
    } else {
      html =
        '<div class="restaurants__not__found">Restoran tidak ditemukan</div>';
    }

    document.querySelector('.restaurants').innerHTML = html;
    document
      .getElementById('restaurant-search-container')
      .dispatchEvent(new Event('restaurants:searched:updated'));
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(restaurantCards(restaurant)),
        ''
      );
    } else {
      html = '<div class="restaurant-item__not__found"></div>';
    }
    document.getElementById('restaurants').innerHTML = html;

    document
      .getElementById('restaurants')
      .dispatchEvent(new Event('restaurants:updated'));
  }
}
export default FavoriteRestaurantSearchView;
