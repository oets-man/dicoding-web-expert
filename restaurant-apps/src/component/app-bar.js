import moment from 'moment';
import css from './app-bar.css';
class AppBar extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadow.innerHTML = `
  		<style>${css}</style>
      <h2>${this.shadow.host.innerHTML}</h2>
      <div class="clock">
        <span class="date"></span>
        <span class="delimiter">|</span>
        <span class="time"></span>
      </div>
    `;
	}
}
customElements.define('app-bar', AppBar);

(() => {
	let component = document.querySelector('app-bar');

	const displayTime = () => {
		moment.locale('id');
		let time = component.shadow.querySelector('.time');
		let date = component.shadow.querySelector('.date');

		date.innerHTML = moment().format('dddd, LL');
		time.innerHTML = moment().format('hh:mm:ss (A)');
	};

	const updateTime = () => {
		displayTime();
		setTimeout(updateTime, 1000);
	};
	updateTime();
})();
