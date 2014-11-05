'use strict'

// @ngInject
module.exports = function ChapterController($log, $scope, $q, $routeParams, $timeout) {
	$log.info('ChapterController');
	$scope.name  = 'ChapterController'
	$scope.params = $routeParams;

	// template load
	var tempPath = $routeParams['chapter'] + '.html'
	var basePath = './templates/tutorial/chapter/'
	$scope.templateUrl = basePath + tempPath

	// SyntaxHighlighter 처리
	$timeout(function () {
		SyntaxHighlighter.highlight()
	}, 100)
}

module.exports.resolve = /*@ngInject*/ {

}