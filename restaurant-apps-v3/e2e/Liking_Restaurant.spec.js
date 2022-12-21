const { async } = require('regenerator-runtime');
const assert = require('assert');
const puppeteer = require('puppeteer');
const { QueryHandler } = require('query-selector-shadow-dom/plugins/puppeteer');
Feature('Liking Restaurant');

Before(({ I }) => {
	I.amOnPage('./#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
	I.waitForElement('.error', 10); // secs
	I.see('Tidak ada data untuk ditampilkan. Silakan favoritkan beberapa restoran!', '.error');

	// --------------------------------
	// I.amOnPage('./');
	// I.seeElement('my-card');
	// I.click(locate('my-card').first());
	// I.waitForVisible('pierce/.description', 5);
	// I.waitForVisible('pierce/.detail', 5);
	// I.click('pierce/.detail');
	// pause();

	// --------------------------------
	for (let i = 1; i <= 3; i++) {
		I.amOnPage('./');
		I.waitForElement('my-card', 30);
		I.click(locate('my-card').at(i));
		const nameInCard = await I.grabTextFrom('pierce/.item-name');
		console.log(i, nameInCard); //loop pertama dan kedua nilainya sama
		I.waitForVisible('pierce/.description', 5); // looping kedua berhenti di sini
		I.waitForVisible('pierce/.detail', 5);
		I.click('pierce/.detail');
		I.waitForElement('h3', 10);
		const nameInDetail = await I.grabTextFrom('h3');
		assert.strictEqual(nameInCard, nameInDetail);
	}

	// --------------------------------
	// I.amOnPage('./');
	// puppeteer.registerCustomQueryHandler('shadow', QueryHandler);
	// I.waitForElement('my-card', 30); // secs
	// I.click(locate('my-card').first());
	// const nameInCard = await I.grabTextFrom('shadow/.item-name');
	// I.waitForVisible('shadow/.description', 5);
	// I.waitForVisible('shadow/.detail', 5);
	// I.click('shadow/.detail');
	// I.waitForElement('h3', 10);
	// const nameInDetail = await I.grabTextFrom('h3');
	// assert.strictEqual(nameInCard, nameInDetail);
	// --------------------------------
	// for (let i = 1; i <= 3; i++) {
	// 	I.amOnPage('./');
	// 	const shadow = 'shadow' + String.fromCharCode(i + 64);
	// 	puppeteer.registerCustomQueryHandler(shadow, QueryHandler);
	// 	I.waitForElement('my-card', 30);
	// 	I.click(locate('my-card').at(i));
	// 	const nameInCard = await I.grabTextFrom(`${shadow}/.item-name`);
	// 	console.log(i, nameInCard) //loop pertama dan kedua nilainya sama
	// 	I.waitForVisible(`${shadow}/.description`, 5); // looping kedua berhenti di sini
	// 	I.waitForVisible(`${shadow}/.detail`, 5);
	// 	I.click(`${shadow}/.detail`);
	// 	I.waitForElement('h3', 10);
	// 	const nameInDetail = await I.grabTextFrom('h3');
	// 	assert.strictEqual(nameInCard, nameInDetail);
	// }

	// I.waitForElement('my-card', 10); // secs
	// I.click(locate('my-card').first());
	// puppeteer.registerCustomQueryHandler('shadow', QueryHandler);
	// const itemName = 'shadow/.item-name';
	// const description = 'shadow/.description';
	// const detail = 'shadow/.detail';

	// const name = await I.grabTextFrom(itemName);

	// I.waitForVisible(description, 5);
	// I.waitForVisible(detail, 5);
	// I.click(detail);
	// I.waitForElement('h3', 10);
	// const restaurant = await I.grabTextFrom('h3');
	// assert.strictEqual(name, restaurant);

	// pause();
	// I.waitForVisible('div.description', 5);
	// I.waitForVisible({ shadow: ['my-card', 'div.item', 'div.description'] }, 5);
	// pause();

	// const restaurants = [];
	// for (let i = 1; i <= 3; i++) {
	// 	I.waitForElement('my-card', 10); // secs
	// 	I.click(locate('my-card').at(i));

	// 	// di bawah ini GAGAL semua
	// 	I.waitForVisible({ shadow: ['my-card', 'div.item', 'div.description'] }, 5);
	// 	// I.waitForElement('.description', 10); // secs
	// 	// I.see('Detail', 'a span');
	// 	// I.seeElement('.detail');
	// 	// I.click('.description a');
	// 	// I.click('.detail');
	// 	// restaurants.push(await I.grabTextFrom('.restaurant__title'));
	// 	// I.amOnPage('./');
	// 	pause();
	// }

	// I.click(locate('.movie__title a').first());
	// const firstFilm = locate('.movie__title a').first();
	// const firstFilmTitle = await I.grabTextFrom(firstFilm);
	// I.click(firstFilm);
	// I.seeElement('#likeButton');
	// I.click('#likeButton');
	// I.amOnPage('./#/like');
	// I.seeElement('.movie-item');
	// const likedFilmTitle = await I.grabTextFrom('.movie__title');
	// assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

// Scenario('searching movies', async ({ I }) => {
// 	I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');

// 	I.amOnPage('./');

// 	I.waitForElement('.movie__title a', 10);

// 	const titles = [];

// 	for (let i = 1; i <= 3; i++) {
// 		I.click(locate('.movie__title a').at(i));
// 		I.seeElement('#likeButton');
// 		I.click('#likeButton');
// 		titles.push(await I.grabTextFrom('.movie__title'));
// 		I.amOnPage('./');
// 		// pause();
// 	}
// 	I.amOnPage('./#/like');
// 	I.seeElement('#query');

// 	const searchQuery = titles[1].substring(1, 3);
// 	// pause();
// 	const matchingMovies = titles.filter((title) => title.indexOf(searchQuery) !== -1);

// 	I.fillField('#query', searchQuery);
// 	I.pressKey('Enter');

// 	const visibleLikedMovies = await I.grabNumberOfVisibleElements('.movie-item');
// 	assert.strictEqual(matchingMovies.length, visibleLikedMovies);

// 	matchingMovies.forEach(async (title, index) => {
// 		const visibleTitle = await I.grabTextFrom(locate('.movie__title').at(index + 1));
// 		assert.strictEqual(title, visibleTitle);
// 	});
// });
