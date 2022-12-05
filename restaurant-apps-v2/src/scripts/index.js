import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import swRegister from './utils/sw-register';

import App from './views/app';

const app = new App({
	button: document.querySelector('#menu'),
	drawer: document.querySelector('#drawer'),
	hero: document.querySelector('#hero'),
	main: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
	app.renderPage();
});

window.addEventListener('load', () => {
	app.renderPage();
	// swRegister();
});
