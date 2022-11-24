const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
hamburgerButtonElement.addEventListener('click', (event) => {
	drawerElement.classList.toggle('open');
	event.stopPropagation();
});
const mainElement = document.querySelector('main');
mainElement.addEventListener('click', (event) => {
	drawerElement.classList.remove('open');
	event.stopPropagation();
});
