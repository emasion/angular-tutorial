/**
 * Created by Davinci28 on 2014-10-28.
 */
'use strict'

var gulp = require('gulp')
var minifyHtml = require('gulp-minify-html')
var templateCache = require('gulp-angular-templatecache')

gulp.task('templates', function() {
	return gulp.src('app/templates/**/*.html')
		// templates html minify 처리
		.pipe(minifyHtml({
			empty: true,            // 빈 속성 삭제 안함
			cdata: false,           // CDATA 제거 안함
			comments: false,        // 댓글 제거 안함
			conditionals: false,    // 조건 IE 주석 제거 안함
			spare: true,            // 중복 속성 제거 안함
			quotes: true            // 따옴표 인용부호 제거 안함
		}))
		// html tempalte cache 처리
		.pipe(templateCache({
			root: 'templates',
			module: 'templates',
			standalone: true
		}))
		.pipe(gulp.dest('.tmp/templates'))
})