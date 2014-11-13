'use strict';

// @ngInject
module.exports = function rootScope($log, $rootScope, $location) {
	$log.info('rootScope')
	//화면 이동 link
	$rootScope.goURL = function (url) {
		$location.url(url)
	}
}
