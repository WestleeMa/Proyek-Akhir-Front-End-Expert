const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/liked');
});

Scenario('Showing empty liked restaurants', ({ I }) => {
  I.seeElement('#kontenRestoran');
  I.see('Belum ada resto yang Anda sukai :(', '.no_like');
});

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.see('Belum ada resto yang Anda sukai :(', '.no_like');
  I.amOnPage('/');
  I.seeElement('#linkResto');
  const firstResto = locate('.title_resto').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click('#linkResto');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/liked');
  I.seeElement('.cardRestoran');
  const likedRestoTitle = await I.grabTextFrom('.title_resto');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.seeElement('#linkResto');
  I.click('#linkResto');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/liked');
  I.see('Belum ada resto yang Anda sukai :(', '.no_like');
});

Scenario('Adding a review to restaurant', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('#linkResto');
  I.click('#linkResto');
  I.seeElement('#tambahReview');
  I.seeElement('.formReview');
  I.seeElement('#namaUser');
  I.seeElement('#reviewUser');
  I.seeElement('#addReview');
  I.fillField('namaUser', 'TestAAA');
  I.click('#addReview');
  I.seeInPopup('Tolong lengkapi form review.');
  I.acceptPopup();
  I.fillField('reviewUser', 'ini Review');
  I.click('#addReview');
  I.seeInPopup('success');
  I.refreshPage();
  I.seeElement('.cardReview');
  I.see('TestAAA', '#namaReviewer');
});
