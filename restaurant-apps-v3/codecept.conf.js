exports.config = {
	tests: 'e2e/**/*.spec.js',
	output: 'e2e/outputs',
	helpers: {
		Puppeteer: {
			url: 'http://localhost:9900/',
			show: true,
		},
	},
	include: {
		I: './steps_file.js',
	},
	bootstrap: null,
	mocha: {},
	name: 'restaurant-apps-v3',
};
