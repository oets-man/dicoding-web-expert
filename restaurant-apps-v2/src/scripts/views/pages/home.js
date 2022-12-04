const Home = {
	async render() {
		return `
        <h2>Daftar Restoran Indonesia</h2>
        <div class="container" id="card-container"></div>
      `;
	},

	async afterRender() {
		// Fungsi ini akan dipanggil setelah render()
	},
};

export default Home;
