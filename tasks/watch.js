/**
 * Created by Davinci28 on 2014-10-24.
 */
'use strict'

var gulp = require('gulp')

/* 변경 내용 감시 및 변경시 처리 task 지정 */
gulp.task('watch', function () {
	gulp.watch('app/**/*.js', ['lint', 'browserify'])
	gulp.watch('app/assets/styles/**/*.css', ['styles'])
	gulp.watch('app/templates/**/*.html', ['templates'])
	gulp.watch('app/index.html', ['inject'])
	gulp.watch('bower.json', ['inject'])
})