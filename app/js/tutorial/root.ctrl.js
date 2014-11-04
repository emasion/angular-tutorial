/**
 * Created by Davinci28 on 2014-10-30.
 */
'use strict'

// @ngInject
module.exports = function RootController($log, $scope, $rootScope, $route, $routeParams, $location) {
	$log.info('RootController');

	// route 정보 등록
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;

	//화면 이동 link
	$rootScope.goURL = function (url) {
		$location.url(url)
	}
}

/* resolve 정의 */
module.exports.resolve = /*@ngInject*/ {

}