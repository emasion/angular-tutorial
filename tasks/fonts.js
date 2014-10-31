/**
 * Created by Davinci28 on 2014-10-31.
 */
'use strict'

var gulp = require('gulp')

gulp.task('fonts', function() {
	return gulp.src('app/assets/fonts/*.*')
		.pipe(gulp.dest('dist/assets/fonts'))
})