'use strict';

// @ngInject
module.exports = function rootScope($log, $rootScope, $location, $window) {
	$log.info('rootScope')
	//화면 이동 link
	$rootScope.goURL = function (url) {
		$location.url(url)
	}

	//Alert 창
	$rootScope.alert = function(msg) {
		$window.alert(msg)
	}
}
