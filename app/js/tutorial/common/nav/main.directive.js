'use strict'

// @ngInject
module.exports = function NavMainDirective() {
	return {
		restrict: 'E',
		templateUrl: 'templates/tutorial/layout/navmain.html',
		controller: function($log, $rootScope, $scope, $location) {
			$scope.selectChapterUrl = '';
			$rootScope.$on('$locationChangeStart',
				function (event, toState, toParams, fromState, fromParams) {
					//$log.log('Directive location URL : ', $location.url());
					//$log.debug('debugStateEvents::' + event.name, {
					//	event: event,
					//	toState: toState,
					//	toParams: toParams,
					//	fromState: fromState,
					//	fromParams: fromParams
					//});
					if(!_.isUndefined($scope.selectChapterUrl)) {
						// ^/ 제거
						$scope.selectChapterUrl = $location.url().substr(1);
						//console.log($scope.selectChapterUrl);
					}
				});

			//Nav Chapter select 처리
			$scope.changeChapter = function() {
				$rootScope.goURL(this.selectChapterUrl);
			}
		}
	};
}