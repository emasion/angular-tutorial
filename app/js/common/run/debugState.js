'use strict';

// @ngInject
module.exports = function debugState ($log, $rootScope, $route, $routeParams, $location) {
	$log.info('debugState')

	console.info('ROUTE', $route)
	console.info('ROUTE_PARAMS', $routeParams)
	console.info('LOCATION', $location)
}
