'use strict';

// @ngInject
module.exports = function ChapterController($log, $rootScope, $scope, $q, $routeParams, $timeout, ChapterService) {
	$log.info('ChapterController')
	$scope.name  = 'ChapterController'
	$scope.params = $routeParams

	// template load error handler
	$scope.$on('$includeContentError',
		function (event, toState, toParams, fromState, fromParams) {
		//$log.log('Directive location URL : ', $location.url());
		$log.debug('debugStateEvents::' + event.name, {
			event: event,
			toState: toState,
			toParams: toParams,
			fromState: fromState,
			fromParams: fromParams
		});
		// redirect 처리
		$scope.goURL('/')
		$scope.alert('잘못된 경로 요청입니다.')
	})

	// template load
	var path = './templates/tutorial/chapter/' + $routeParams.chapter + '.html'
	$scope.templateUrl = path

	// SyntaxHighlighter 처리
	$timeout(function () {
		if(ChapterService.SyntaxHighlighter.highlight) {
			ChapterService.SyntaxHighlighter.highlight()
		}
	}, 100)
}

module.exports.resolve = /*@ngInject*/ {

}