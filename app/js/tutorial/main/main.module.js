'use strict';

var MainController = require('./main.ctrl')

function config($routeProvider) {

	$routeProvider
		.when('/tutorial/main/', {
			templateUrl: 'templates/tutorial/main.html',
			controller: 'MainController',
			resolve: MainController.resolve
		})

}

angular.module('tutorial.main', [])
.config(config)
.controller('MainController', MainController)