/* eslint-env node */

const gulp = require( 'gulp' );
const del = require( 'del' );
const postcss = require( 'gulp-postcss' );
const rename = require( 'gulp-rename' );
const rtlcss = require( 'gulp-rtlcss' );

const cssConfig = {
	src: 'css/src',
	dist: 'css/dist',
};

gulp.task( 'css-clean', () => {
	return del( cssConfig.dist + '/**' );
} );

gulp.task( 'css-build-sass', () => {
	// TODO: Delete all dist before this.
	return gulp
		.src( cssConfig.src + '/*.scss' )
		.pipe( postcss() ) // Uses the config from postcss.config.js.
		.pipe( rename( { extname: '.css' } ) )
		.pipe( gulp.dest( cssConfig.dist ) )
		.pipe( rtlcss() ) // Uses the config from .rtlcssrc.json.
		.pipe( rename( { suffix: '-rtl' } ) )
		.pipe( gulp.dest( cssConfig.dist ) );
} );

gulp.task( 'css-build', gulp.series( 'css-clean', 'css-build-sass' ) );

gulp.task( 'css-watch', () => {
	return gulp.watch( cssConfig.src + '/**/*.scss', gulp.parallel( 'css-build' ) );
} );

gulp.task( 'build', gulp.series( 'css-build' ) );
gulp.task( 'watch', gulp.series( 'css-watch' ) );
