'use strict'

// @ngInject
module.exports = function ChapterController($log, $scope, $routeParams) {
	$log.info('ChapterController');
	$scope.testMessage = 'test!!!ChapterController'
	$scope.name  = 'ChapterController'
	$scope.params = $routeParams;
}

module.exports.resolve = /*@ngInject*/ {

}