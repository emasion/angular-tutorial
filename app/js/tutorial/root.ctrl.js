'use strict'

// @ngInject
module.exports = function RootController($log, $scope, $rootScope, $route, $routeParams, $location, TableListService) {
	$log.info('RootController');

	// route 정보 등록
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;

	//화면 이동 link
	$rootScope.goURL = function (url) {
		$location.url(url);
	}

	//목차 정보 등록
	TableListService.getTableList().then(function(data) {
		$rootScope.tableList = data;
	})


}

/* resolve 정의 */
module.exports.resolve = /*@ngInject*/ {

}