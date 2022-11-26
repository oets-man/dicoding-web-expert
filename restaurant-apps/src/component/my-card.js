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
		const { html_url, login, avatar_url, name, bio, email, location, followers, following, public_repos } = this._item;
		this.shadow.innerHTML = `
      <style>${css}</style>
      <div class="item">
        <img src="${avatar_url}" alt="user avatar"/>
        <table>
          <tr>
            <td>login:</td>
            <td><a target="_blank" href="${html_url}">${login}</a></td>
          </tr>
          <tr>
            <td>nama:</td>
            <td>${name ? name : '-'}</td>
          </tr>
            <td>email:</td>
            <td>${email ? email : '-'}</td>
          </tr>
          <tr>
            <td>lokasi:</td>
            <td>${location ? location : '-'}</td>
          </tr>
          <tr>
            <td>Bio:</td>
            <td>${bio ? bio : '-'}</td>
          </tr>
        </table>
        <p>
          <span>pengikut: </span> ${followers ? followers : 0}; 
          <span>mengikuti: </span> ${following ? following : 0}; 
          <span>repo publik: </span>  ${public_repos ? public_repos : 0}
        </p>
      </div>
      `;
	}
}
customElements.define('my-card', MyCard);
