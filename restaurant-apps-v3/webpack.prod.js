const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	// entry: {
	// 	sw: path.resolve(__dirname, 'src/scripts/sw-native.js'),
	// },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				],
			},
		],
	},
	plugins: [
		new WorkboxWebpackPlugin.GenerateSW({
			swDest: './sw.bundle.js',
		}),
	],
});
