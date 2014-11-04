'use strict'

// @ngInject
module.exports = function LoadCodeTemplateService($rootScope, $q, $timeout, $filter, $http) {
	var self = this
	var data = {}
	var basePath = './templates/tutorial/chapter/'

	self.hasLoadTemplate = function(fileNm) {
		return !_.isEmpty(data[fileNm])
	}

	self.getLoadTemplate = function(fileNm) {
		var d = $q.defer();

		if(self.hasLoadTemplate(fileNm)) {
			d.resolve(data[fileNm])
		} else {
			$http.get(basePath + fileNm).success(function(template) {
				data[fileNm] = template
				d.resolve(template)
			})
		}
		return d.promise
	}
}