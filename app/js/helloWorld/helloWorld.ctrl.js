/**
 * Created by Davinci28 on 2014-10-30.
 */
'use strict'

// @ngInject
module.exports = function HelloWorldController($log, $scope) {
	$log.info('HelloWorld Controller!!')

	var libs = []

	// angular
	libs.push({
		name: 'angular',
		url: 'https://angularjs.org/'
	})

	// angular-ui-router
	libs.push({
		name: 'angular-ui-router',
		url: 'http://angular-ui.github.io/ui-router/site/#/api/ui.router'
	})

	$scope.libs = libs
}

module.exports.resolve = /*@ngInject*/ {
	myData: function (HelloWorldService) {
		return HelloWorldService.getData()
	}
}