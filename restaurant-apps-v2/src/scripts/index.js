import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
// import { main } from './main';

import App from './views/app';

const app = new App({
	button: document.querySelector('#menu'),
	drawer: document.querySelector('#drawer'),
	hero: document.querySelector('#hero'),
	main: document.querySelector('main'),
});

// document.addEventListener('DOMContentLoaded', () => {
// 	DrawerInitiator.init({ button, drawer, hero, main });
// 	// main();
// });
