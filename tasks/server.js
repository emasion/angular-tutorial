'use strict'

var gulp = require('gulp')
var browserSync = require('browser-sync')
var middleware = require('./proxy')

function browserSyncInit(baseDir, files, browser) {
	browser = browser === undefined ? 'default' : browser;

	browserSync.instance = browserSync.init(files, {
		startPath: '/index.html',
		notify: false,
		injectFileTypes: ["css", "png", "jpg", "jpeg", "svg", "gif", "webp"],
		server: {
			baseDir: baseDir,
			middleware: middleware
		},
		browser: browser
		//port: conf.port
	});
}

/* serve 구동 - dev */
gulp.task('serve', ['watch'], function() {
	browserSyncInit(
		['.tmp', 'app'],
		['.tmp/**/*.js', '.tmp/**/*.css', '.tmp/*.html'],
		'google chrome'
	);
})

/* serve 구동 - dist */
gulp.task('serve:dist', ['build'], function() {
	browserSyncInit(
		['dist'],
		null,
		'google chrome'
	);
})


