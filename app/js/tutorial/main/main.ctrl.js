'use strict'

// @ngInject
module.exports = function MainController($log, $scope, $routeParams, TableList) {
	$log.info('MainController');
	$scope.testMessage = 'test!!!MainController'
	$scope.name  = 'MainController'
	$scope.params = $routeParams;

	$scope.$tableList = TableList.getTableList()
	console.log($scope.$tableList)
}

module.exports.resolve = /*@ngInject*/ {
	TableList: function ($q, $timeout, TableListService) {
		var d = $q.defer();
		var session = {};

		if(!TableListService.hasTableList()) {
			// 목차 정보 가져오는 부분
		} else {
			$timeout(function () {
				d.resolve(TableListService)
			})
		}
		return d.promise
	}
}