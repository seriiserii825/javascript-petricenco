'use strict';
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
let path = require('path');

module.exports = {
	mode: 'production',
	entry: './assets/js/main.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/assets/js'
	},
	watch: true,
	plugins: [
		// new BrowserSyncPlugin(
		// 	// BrowserSync options
		// 	{
		// 		// browse to http://localhost:3000/ during development
		// 		host: 'localhost',
		// 		port: 3000,
		// 		// proxy the Webpack Dev Server endpoint
		// 		// (which should be serving on http://localhost:3100/)
		// 		// through BrowserSync
		// 		proxy: 'http://javascript.host1670806.hostland.pro/'
		// 	},
		// 	// plugin options
		// 	{
		// 		// prevent BrowserSync from reloading the page
		// 		// and let Webpack Dev Server take care of this
		// 		reload: true
		// 	}
		// ),
		new BrowserSyncPlugin({
			// browse to http://localhost:3000/ during development,
			// ./public directory is being served
			host: 'localhost',
			port: 3000,
			server: {baseDir: ['.']}
		})
	],
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', {
							debug: true,
							corejs: 3,
							useBuiltIns: "usage"
						}]]
					}
				}
			}
		]
	}
};
