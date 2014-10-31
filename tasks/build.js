/**
 * Created by Davinci28 on 2014-10-31.
 */
'use strict'

var gulp = require('gulp')
var runSequence = require('run-sequence')

gulp.task('build', ['install'], function(done) {
	runSequence(
		'clean',
		'lint',
		['browserify', 'templates', 'styles'],
		'inject',
		['html', 'images', 'fonts'],
		done
	);
})