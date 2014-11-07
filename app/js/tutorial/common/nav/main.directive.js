'use strict'

// @ngInject
module.exports = function NavMainDirective() {
	return {
		restrict: 'E',
		templateUrl: 'templates/tutorial/layout/navmain.html',
		link: function($rootScope, $scope) {
			// $scope 는 nav-main-direcitve 를 가르킨다.

			//Navi Chapter select 처리
			$rootScope.changeChapter = function() {
				$rootScope.goURL(this.selectChapter.url);
			}
		}
	};
}