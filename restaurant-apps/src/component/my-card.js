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
      <div class="item">
        <div class="content">
          <img src="${picture}" alt="gambar restoran"/>
          <table>
            <tr>
              <td>nama:</td>
              <td>${name}</td>
            </tr>
            <tr>
              <td>kota:</td>
              <td>${city}</td>
            </tr>
            <tr>
              <td>rating:</td>
              <td>${rating}</td>
            </tr>
          </table>
        </div>
        <p id="description" class="description">${description}</p>
      </div>
      `;
		this.shadow.querySelector('.item').addEventListener('click', () => {
			const description = this.shadow.querySelector('#description');
			description.classList.toggle('open');
		});
	}
}
customElements.define('my-card', MyCard);
