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
	I.amOnPage('./');

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

	const restaurants = [];
	for (let i = 1; i <= 3; i++) {
		let shadow ='shadow'
		switch(i) {
			case 1:
			  shadow='shadowa'
			  break;
			case 2:
			  shadow='shadowb'
			  break;
			default:
			  shadow='shadowc'
		  }
		  console.log(shadow);
		puppeteer.registerCustomQueryHandler(shadow, QueryHandler);
		I.waitForElement('my-card', 30); // secs
		I.click(locate('my-card').at(i));
		const itemName = `${shadow}/.item-name`;
		const description = `${shadow}/.description`;
		const detail = `${shadow}/.detail`;

		const name = await I.grabTextFrom(itemName);
		console.log('name ' + name);

		I.waitForVisible(detail, 5);
		I.waitForVisible(description, 5);
		I.click(detail);
		I.waitForElement('h3', 10);
		let restaurant = await I.grabTextFrom('h3');
		console.log('restaurant ' + restaurant);
		// assert.strictEqual(name, restaurant);
		I.amOnPage('./');
		pause();
	}

	// pause();
	// I.waitForVisible('div.description', 5);
	// I.waitForVisible({ shadow: ['my-card', 'div.item', 'div.description'] }, 5);
	// pause();

	// for (let i = 1; i <= 3; i++) {
	// 	I.amOnPage('./');
	// 	console.log(i);
	// 	I.waitForElement('my-card', 30); // secs
	// 	I.click(locate('my-card').at(i));
	// 	I.amOnPage('./#/favorite');
	// }

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
