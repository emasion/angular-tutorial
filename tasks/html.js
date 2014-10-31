/**
 * Created by Davinci28 on 2014-10-29.
 */
'use strict'

var gulp = require('gulp')
var wiredep = require('wiredep').stream
var preprocess = require('gulp-preprocess')
var useref = require('gulp-useref')
var gulpif =require('gulp-if')
var uglify = require('gulp-uglify')
var saveLicense = require('uglify-save-license');
var minifyCss = require('gulp-minify-css')

gulp.task('inject', function() {
	return gulp.src('app/index.html')
		/* bower package 들을 html에 include */
		.pipe(wiredep({
			directory: 'app/lib'
		}))
		.pipe(preprocess())
		.pipe(gulp.dest('.tmp'))
})

gulp.task('html', function() {
	var assets = useref.assets()
	return gulp.src('.tmp/*.html')
		.pipe(assets)
		/* html에 연결된 js 파일이 있으면 uglify
		* license는 표기
		* */
		.pipe(gulpif('*.js', uglify({preserveComments: saveLicense})))
		/* html에 연결된 css 파일이 있으면 minifyCss */
		.pipe(gulpif('*.css', minifyCss()))
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest('dist'))
})