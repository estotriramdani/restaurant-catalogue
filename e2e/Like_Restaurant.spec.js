Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

After(({ I }) => {
  I.amOnPage('/');
  I.see('Explore Restaurant', '.explore-title');
});

Scenario('liking a restaurant', ({ I }) => {
  I.seeElement('.card-button a');
  I.click(locate('.card-button a').first());
  I.seeElement('[aria-label="like this restaurant"]');
  I.click('[aria-label="like this restaurant"]');
});

Scenario('unliking restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.card-button a');
  I.click(locate('.card-button a').first());
  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');
});
