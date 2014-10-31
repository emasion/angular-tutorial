/**
 * Created by Davinci28 on 2014-10-24.
 */
'use strict'

var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var browserify = require('gulp-browserify')
var preprocess = require('gulp-preprocess')

/*  */
gulp.task('js', function () {
	gulp.src(['app/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('.tmp/js/'))
})

/* script 파일 준비 단계 */
gulp.task('preprocess:scripts', function() {
	gulp.src('app/js/**/*.js')
		.pipe(preprocess())
		.pipe(ngAnnotate())
		.pipe(gulp.dest('.preprocess/js/'))
})

gulp.task('browserify', ['preprocess:scripts'], function() {
	return gulp.src('.preprocess/js/app.js')
		.pipe(browserify({
			insertGlobals: true
		}))
		.pipe(gulp.dest('.tmp/js'))
})
