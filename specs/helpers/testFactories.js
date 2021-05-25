/* eslint-disable import/prefer-default-export */
import FavoriteRestaurant from '../../src/scripts/data/favorite-restaurant';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurant,
    restaurant,
  });
};
export { createLikeButtonPresenterWithRestaurant };
