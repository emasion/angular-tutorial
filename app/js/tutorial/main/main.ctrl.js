'use strict'

// @ngInject
module.exports = function MainController($log, $scope, $routeParams) {
	$log.info('MainController');
	$scope.name  = 'MainController'
	$scope.params = $routeParams;
}

module.exports.resolve = /*@ngInject*/ {

}