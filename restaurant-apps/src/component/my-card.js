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
      <div class="item" tabindex="0">
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
        <div id="description" class="description">
          <div class="btn">
            <button id="btn-detail">Detail</button>
            <button id="btn-favorite">Favorit</button>
          </div>
          <p>${description}</p>
        </div>
      </div>
      `;
		this.shadow.querySelector('.item').addEventListener('click', () => {
			const description = this.shadow.querySelector('#description');
			description.classList.toggle('open');
		});
		this.shadow.querySelector('button').addEventListener('click', () => {
			alert('Maaf. Fitur masih dalam pengembangan!');
		});
	}
}
customElements.define('my-card', MyCard);
