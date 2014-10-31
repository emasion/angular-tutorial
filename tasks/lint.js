/**
 * Created by Davinci28 on 2014-10-24.
 */
'use strict'

var gulp = require('gulp')
var jshint = require('gulp-jshint')

/* jshint */
gulp.task('lint', function() {
	return gulp.src('app/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		//.pipe(jshint.reporter('default'))
})