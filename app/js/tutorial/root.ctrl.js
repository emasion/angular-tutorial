/**
 * Created by Davinci28 on 2014-10-30.
 */
'use strict'

// @ngInject
module.exports = function RootController($log, $scope, $rootScope, $state, TableList) {
	$log.info('RootController');

	//화면 이동 link
	$rootScope.goURL = function (url) {
		$state.go(url, {loadDefault: true})
	}

	//목차 리스트 등록
	$scope.tableList = TableList.getTableList()

}

/* resolve 정의 */
module.exports.resolve = /*@ngInject*/ {
	TableList: function ($state, $q, $timeout, TableListService) {
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