/**
 * Created by Davinci28 on 2014-11-04.
 */
'use strict'

var gulp = require('gulp')
var groc = require('gulp-groc')

gulp.task('groc', function() {
	return gulp.src('app/assets/data/chapter/**/*.md')
		.pipe(groc({
			out: 'jsdoc'
		}))
})