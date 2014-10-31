/**
 * Created by Davinci28 on 2014-10-29.
 */
'use strict'

var gulp = require('gulp')
var plumber = require('gulp-plumber')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('styles', function() {
	return gulp.src('app/assets/styles/**/*.css')
		.pipe(plumber())
		.pipe(autoprefixer())
		.pipe(gulp.dest('.tmp/assets/styles'))
})