'use strict'

// @ngInject
module.exports = function MainController($log, $scope, $routeParams, TableList) {
	$log.info('MainController');
	$scope.name  = 'MainController'
	$scope.params = $routeParams;

	TableList.getTableList().then(function(data) {
		$scope.tableList = data
		console.log($scope.tableList)
	})
}

module.exports.resolve = /*@ngInject*/ {
	TableList: function ($q, $timeout, TableListService) {
		var d = $q.defer();
		$timeout(function () {
			d.resolve(TableListService)
		})
		return d.promise
	}
}