import css from './my-card.css';

class MyCard extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	set item(item) {
		this._item = item;
		this.render();
	}

	render() {
		const { id, name, description, picture, city, rating } = this._item;
		this.shadow.innerHTML = `
			<style>${css}</style>
			<div class="item" tabindex="0" id="restaurantId-${id}">
				<div class="content">
					<img loading="lazy" width="100" height="100" src="${picture}" alt="gambar restoran" />
					<table>
						<tr>
							<td>nama:</td>
							<td class="item-name">${name}</td>
						</tr>
						<tr>
							<td>kota:</td>
							<td>${city}</td>
						</tr>
						<tr>
							<td>rating:</td>
							<td>${parseFloat(rating).toFixed(1)} ⭐️</td>
						</tr>
					</table>
				</div>
				<div id="description-${id}" class="description">
					<a href="/#/detail/${id}" class="detail">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>
						<span>Detail</span>  
					</a>
				<p>${description}</p>
				</div>
			</div>
		`;
		// card item
		const elDescription = this.shadow.querySelector(`#description-${id}`);
		this.shadow.querySelector('.item').addEventListener('click', () => {
			elDescription.classList.toggle('open');
		});

		this.shadow.querySelector('.item').addEventListener('keypress', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				elDescription.classList.toggle('open');
			}
		});
	}
}
customElements.define('my-card', MyCard);
