'use strict'

var MainController = require('./main.ctrl')

function config($stateProvider) {
	$stateProvider
		.state('tutorial.main', {
			url: '/main',
			templateUrl: 'templates/tutorial/main.html',
			controller: 'MainController as mainCtrl',
			resolve: MainController.resolve
		})
}

angular.module('tutorial.main', [])
.config(config)
.controller('MainController', MainController)