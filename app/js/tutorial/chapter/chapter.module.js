'use strict'

/* Chapter module */
var ChapterController = require('./chapter.ctrl')
function config($routeProvider) {

	$routeProvider
		.when('/tutorial/chapter/:chapter', {
			templateUrl: 'templates/tutorial/chapter.html',
			controller: 'ChapterController',
			resolve: ChapterController.resolve
		})
}

angular.module('tutorial.chapter', [])
.config(config)
.controller('ChapterController', ChapterController)

