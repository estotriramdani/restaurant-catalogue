/* eslint-disable class-methods-use-this */
import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';

describe('Searching restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurant);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should show - when the restaurant returned does not contain a title', (done) => {
      document
        .getElementById('restaurant-search-container')
        .addEventListener('restaurants:searched:updated', () => {
          const restaurantTitles =
            document.querySelectorAll('.restaurant__title');
          expect(restaurantTitles.item(0).textContent).toEqual('-');

          done();
        });

      favoriteRestaurants.searchRestaurants
        .withArgs('restaurant a')
        .and.returnValues([{ id: 444 }]);

      searchRestaurants('restaurant a');
    });

    it('should show the title of the found restaurants', () => {
      presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }]);
      expect(
        document.querySelectorAll('.restaurant__title').item(0).textContent
      ).toEqual('Satu');
    });

    it('should show the title of the found restaurants', () => {
      presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }]);
      expect(
        document.querySelectorAll('.restaurant__title').item(0).textContent
      ).toEqual('Satu');

      presenter._showFoundRestaurants([
        { id: 1, title: 'Satu' },
        { id: 2, title: 'Dua' },
      ]);

      const movieTitles = document.querySelectorAll('.restaurant__title');
      expect(movieTitles.item(0).textContent).toEqual('Satu');
      expect(movieTitles.item(1).textContent).toEqual('Dua');
    });

    it('should show - for found movie without title', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);

      expect(
        document.querySelectorAll('.restaurant__title').item(0).textContent
      ).toEqual('-');
    });

    it('should show the restaurants found by Favorite Restaurants', (done) => {
      document
        .getElementById('restaurant-search-container')
        .addEventListener('restaurants:searched:updated', () => {
          const restaurantTitles =
            document.querySelectorAll('.restaurant__title');
          expect(restaurantTitles.item(0).textContent).toEqual('restoran abc');
          expect(restaurantTitles.item(1).textContent).toEqual(
            'ada juga restoran abcde'
          );
          expect(restaurantTitles.item(2).textContent).toEqual(
            'ini juga boleh restoran a'
          );

          done();
        });

      favoriteRestaurants.searchRestaurants
        .withArgs('restaurant a')
        .and.returnValues([
          { id: 111, title: 'restoran abc' },
          { id: 222, title: 'ada juga restoran abcde' },
          { id: 333, title: 'ini juga boleh restoran a' },
        ]);

      searchRestaurants('restaurant a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      searchRestaurants('    ');

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document
        .getElementById('restaurant-search-container')
        .addEventListener('restaurants:searched:updated', () => {
          expect(
            document.querySelectorAll('.restaurants__not__found').length
          ).toEqual(1);
          done();
        });

      favoriteRestaurants.searchRestaurants
        .withArgs('restaurant a')
        .and.returnValues([]);

      searchRestaurants('restaurant a');
    });

    it('should not show any restaurant', (done) => {
      document
        .getElementById('restaurant-search-container')
        .addEventListener('restaurants:searched:updated', () => {
          expect(document.querySelectorAll('.restaurant').length).toEqual(0);
          done();
        });

      favoriteRestaurants.searchRestaurants
        .withArgs('restaurant a')
        .and.returnValues([]);

      searchRestaurants('restaurant a');
    });
  });
});
