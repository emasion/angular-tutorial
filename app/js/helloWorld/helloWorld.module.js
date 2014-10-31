/**
 * Created by Davinci28 on 2014-10-30.
 */
'use strict'

var HelloWorldController = require('./helloWorld.ctrl')
var HelloWorldService = require('./helloWorld.svc')

// @ngInject
function config($stateProvider) {

	// Now set up the states
	$stateProvider
		.state('helloWorld', {
			url: "/helloWorld",
			templateUrl: "templates/helloWorld/helloWorld.html"
			//resolve: HelloWorldController.resolve
		})
		.state('helloWorld.list', {
			url: "/list",
			templateUrl: "templates/helloWorld/helloWorld.list.html",
			controller: 'HelloWorldController'
			//resolve: HelloWorldController.resolve
		})
}

angular.module('helloWorld', ['ui.router'])
.config(config)
.controller('HelloWorldController', HelloWorldController)
.factory('HelloWorldService', HelloWorldService)