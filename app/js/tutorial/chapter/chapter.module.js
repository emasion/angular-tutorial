'use strict';

/* Chapter module */
var ChapterService = require('./chapter.svc')
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
.factory('ChapterService', ChapterService)
.controller('ChapterController', ChapterController)

