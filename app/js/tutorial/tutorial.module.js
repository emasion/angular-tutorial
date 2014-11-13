'use strict';

require('./common/common.module')
require('./main/main.module')
require('./chapter/chapter.module')

var RootController = require('./root.ctrl')
var NavMainDirective = require('./common/nav/main.directive')

// @ngInject
function config($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			controller: 'RootController',
			resolve: RootController.resolve,
			redirectTo: '/tutorial/main'
		});

	$routeProvider
		.otherwise({
			redirectTo : '/tutorial/main'
		})
}

angular.module('tutorial', [
	'ngRoute',
	'templates',
	'tutorial.common',
	'tutorial.main',
	'tutorial.chapter'
])
.config(config)
.controller('RootController', RootController)
.directive('navMainDirective', NavMainDirective)