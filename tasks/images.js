/**
 * Created by Davinci28 on 2014-10-31.
 */
'use strict'

var gulp = require('gulp')
var imagemin = require('gulp-imagemin')

gulp.task('images', function() {
	return gulp.src('app/assets/images/**/*.*')
		.pipe(imagemin({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('dist/assets/images'))
})