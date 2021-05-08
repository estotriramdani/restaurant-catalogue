import DicodingRestaurantSource from '../../data/dicoding-restaurant';
import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
    <div class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
    const restaurantDetailContainer = document.querySelector('.restaurant');
    const exploreTitle = document.querySelector('.explore-title');
    const exploreSubtitle = document.querySelector('.explore-subtitle');
    exploreSubtitle.innerHTML = `${restaurant.restaurant.categories[0].name} - ${restaurant.restaurant.categories[1].name}`;
    exploreTitle.innerHTML = restaurant.restaurant.name;

    restaurantDetailContainer.innerHTML = `
    <div class="restaurant-img">
      <img
        src="${CONFIG.BASE_IMAGE_URL}${restaurant.restaurant.pictureId}"
        alt="${restaurant.restaurant.name}"
      />
    </div>
    <div class="restaurant-detail">
          <div class="restaurant-detail__heading">
            <h3>${restaurant.restaurant.name}</h3>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
              4.2
            </p>
          </div>
          <div class="restaurant-detail__categories">
            <p>${restaurant.restaurant.categories[0].name}</p>
            <p>${restaurant.restaurant.categories[1].name}</p>
          </div>
          <div class="restaurant-detail__description">
            <p>${restaurant.restaurant.description}</p>
          </div>
          <div class="restaurant-detail__location">
            <p class="restaurant-detail__location__city">
              ${restaurant.restaurant.city}
            </p>
            <p class="restaurant-detail__location__address">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>  
            ${restaurant.restaurant.address}
            </p>
          </div>
          <div class="cta">
            <a href="#/">HOME</a>
            <a href="#/favorite">FAVORITE</a>
          </div>
        </div>
    `;
  },
};

export default Detail;
