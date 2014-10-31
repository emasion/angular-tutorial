/**
 * Created by Davinci28 on 2014-10-24.
 */
// dev task
// 개발 용도

'use strict'

var gulp = require('gulp')
var runSequence = require('run-sequence')

/* 개발용 task */
gulp.task('dev', ['install'], function(done) {
	runSequence(
		'clean',
		'lint',
		['browserify', 'templates', 'styles'],
		'inject',
		'serve',
		done
	);
})