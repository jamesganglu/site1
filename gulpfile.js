var {gulp, src, dest, watch, series, parallel} = require('gulp');

var package = require('./package.json');
var header = require('gulp-header');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify-es').default;
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var optimizejs = require('gulp-optimize-js');
var jshint = require('gulp-jshint');

var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-cssnano');

var browserSync = require('browser-sync');

var banner = {
	full:
		'/*!\n' +
		' * <%= package.name %> v<%= package.version %>\n' +
		' * <%= package.description %>\n' +
		' * (c) ' + new Date().getFullYear() + ' <%= package.author.name %>\n' +
		' * <%= package.license %> License\n' +
		' * <%= package.repository.url %>\n' +
		' */\n\n',
	min:
		'/*!' +
		' <%= package.name %> v<%= package.version %>' +
		' | (c) ' + new Date().getFullYear() + ' <%= package.author.name %>' +
		' | <%= package.license %> License' +
		' | <%= package.repository.url %>' +
		' */\n'
};

var paths = {
	input: 'src/',
	output: 'dist/',
	scripts: {
		input: ['src/js/libs/*', 'src/js/plugins/*', 'src/js/common.js'],
		polyfills: '.polyfill.js',
		output: './js/',
		temp:'html/js/'
	},
	styles: {
		input: 'src/sass/**/*.{scss,sass}',
		output: './css/',
		temp:'html/css/'
	},
	copy: {
		input: 'src/copy/**/*',
		output: './'
	},
	reload: 'html/'
};

var jsTask = function(cb){
	return src(paths.scripts.input, {sourcemaps:true, allowEmpty:true})
	.pipe(sourcemaps.init())
    .pipe(jshint())
	.pipe(optimizejs())
	.pipe(babel({
        presets: ['@babel/env']
    }))
	.pipe(concat('bundle.js'))
	.pipe(dest(paths.scripts.temp))
	.pipe(rename('bundle.min.js'))
	.pipe(uglify())
	.pipe(sourcemaps.write('.'))
	.pipe(header(banner.min, {package: package}))
	.pipe(dest(paths.scripts.output))
}

var styleTask = function(cb){
	return src(paths.styles.input, {sourcemaps:true})
		.pipe(sass({
			outputStyle: 'expanded',
			sourceComments: true
		}))
		.pipe(prefix({
			browsers: ['last 2 version', '> 0.25%'],
			cascade: true,
			remove: true
		}))
		.pipe(dest(paths.styles.temp))
		.pipe(rename({suffix: '.min'}))
		.pipe(minify({
			discardComments: {
				removeAll: true
			}
		}))
		.pipe(header(banner.min, { package : package }))
		.pipe(dest(paths.styles.output));
}

var sayMyName = function(cb){
	console.log(package.name);
	cb();
}

var startServer = function (cb) {
	browserSync.init({
		server: {
			baseDir: paths.reload
		}
	});
	cb();
};

var reloadBrowser = function (cb) {
	browserSync.reload();
	cb();
};


var watchSource = function (done) {
	watch(paths.scripts.input,  series(jsTask));
	watch(paths.styles.input,  series(styleTask));
	done();
};

var watchHtml = function (done) {
	watch(paths.reload,  series(reloadBrowser));
	done();
};

exports.default = series(jsTask, styleTask);

exports.watch = series(
	exports.default, 
	startServer, 
	watchSource,
	watchHtml
);