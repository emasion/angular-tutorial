/**
 * Created by Davinci28 on 2014-10-30.
 */
'use strict'

// @ngInject
module.exports = function HelloWorldService($log, $http, $q) {
	$log.info('HelloWorld HelloWorldService!!')

	// The $http service is a core Angular service that facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.
	var serviceUrl = 'serviceApiPath'   // path
	var HelloWorldService = {}

	HelloWorldService.getData = function (data, config) {
		return $http.post(serviceUrl, data, config).
			success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
			}).
			error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			})
	}

	return HelloWorldService
}