/**
 * Created by Davinci28 on 2014-10-24.
 */
'use strict'

var gulp = require('gulp')
var rimraf = require('gulp-rimraf')

/* clean */
gulp.task('clean', function() {
	return gulp.src(['./.tmp', './.preprecess'], { read: false })
		.pipe(rimraf({ force: true }))
})