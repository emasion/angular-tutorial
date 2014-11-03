'use strict'

require('./common/common.module')
require('./main/main.module')

var RootController = require('./root.ctrl')

// @ngInject
function config($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('tutorial', {
			url: "/tutorial",
			controller: 'RootController as rootCtrl',
			resolve: RootController.resolve
		})

	$urlRouterProvider.otherwise(function ($injector, $location) {
		return '/'
	})
}

// @ngInject
function run($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}

angular.module('tutorial', [
	'templates',
	'tutorial.common',
	'tutorial.main'
])
.config(config)
.controller('RootController', RootController)
.run(run)