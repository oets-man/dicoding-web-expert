import 'regenerator-runtime'; /* for async await transpile */
// import '../component/app-bar';
import '../styles/main.scss';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('nav');

menu.addEventListener('click', function (event) {
	drawer.classList.toggle('open-nav');
	event.stopPropagation();
});

hero.addEventListener('click', function () {
	drawer.classList.remove('open-nav');
});

main.addEventListener('click', function () {
	drawer.classList.remove('open-nav');
});
