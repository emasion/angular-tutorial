/**
 * Created by Davinci28 on 2014-10-24.
 */
// install task
// bower install 용도
'use strict'

var gulp = require('gulp')
var bower = require('bower')

/* bower installer */
gulp.task('install', function() {
	return bower.commands.install()
});
