Feature('Like Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.restaurants');
  I.see('Tidak ada restoran untuk ditampilkan');
});
