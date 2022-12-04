import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
	constructor({ button, drawer, hero, main }) {
		this._button = button;
		this._drawer = drawer;
		this._hero = hero;
		this._main = main;
		this._initialAppShell();
	}

	_initialAppShell() {
		DrawerInitiator.init({
			button: this._button,
			drawer: this._drawer,
			hero: this._hero,
			main: this._main,
		});
	}

	async renderPage() {
		const url = UrlParser.parseActiveUrlWithCombiner();
		const page = routes[url];
		this._main.innerHTML = await page.render();
		await page.afterRender();
	}
}

export default App;
