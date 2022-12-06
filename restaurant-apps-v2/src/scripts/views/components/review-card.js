import css from './review-card.css';

class ReviewCard extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	set item(item) {
		this._item = item;
		this.render();
	}

	render() {
		const { name, date, review } = this._item;
		this.shadow.innerHTML = `
			<style>${css}</style>
			<div class="item">
				<p class="review">${review}</p>
				<p class="name">— oleh: ${name}</p>
				<p class="date">— pada: ${date}</p>
			</div>
		`;
	}
}
customElements.define('review-card', ReviewCard);
