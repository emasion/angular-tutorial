/**
 * Created by Davinci28 on 2014-10-30.
 */
'use strict'

// @ngInject
module.exports = function RootController($log, $scope, $rootScope, $state) {
	$log.info('RootController');

	//화면 이동 link
	$rootScope.goURL = function (url) {
		$state.go(url, {loadDefault: true})
	}
}