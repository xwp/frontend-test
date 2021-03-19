/**
 * External dependencies
 */

// TerserPlugin is bundled in Webpack 5.
// eslint-disable-next-line import/no-extraneous-dependencies
const TerserPlugin = require( 'terser-webpack-plugin' );
// path is a native Node module
// eslint-disable-next-line import/no-extraneous-dependencies
const path = require( 'path' );
const WebpackBar = require( 'webpackbar' );

/**
 * WordPress dependencies
 */
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

const sharedConfig = {
	output: {
		path: path.join( __dirname, 'js/dist' ),
		filename: `[name].js`,
		chunkFilename: `[name].js`,
	},
	optimization: {
		minimizer: [
			new TerserPlugin( {
				parallel: true,
				sourceMap: false,
				cache: true,
				terserOptions: {
					output: {
						comments: /translators:/i,
					},
				},
				extractComments: false,
			} ),
		],
	},
	plugins: [ ...defaultConfig.plugins ],
};

const frontEnd = {
	...defaultConfig,
	...sharedConfig,
	entry: {
		main: [ './js/src/main.js' ],
	},
	plugins: [
		...sharedConfig.plugins,
		// Display nice progress bar while building or watching.
		new WebpackBar( {
			name: 'Main',
			color: '#36f271',
		} ),
	],
};

module.exports = [ frontEnd ];
