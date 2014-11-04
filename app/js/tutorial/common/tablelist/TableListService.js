'use strict'

// @ngInject
module.exports = function TableListService($rootScope, $q, $timeout, $filter, $http) {
	var self = this
	var data = {}
	var jsonPath = './assets/data/tablelist.json'

	self.hasTableList = function() {
		return !_.isEmpty(data)
	}

	self.getTableList = function() {
		var d = $q.defer();

		if(self.hasTableList()) {
			d.resolve(data.tableList)
		} else {
			$http.get(jsonPath).success(function(jsonData) {
				data.tableList = jsonData
				d.resolve(jsonData)
			})
		}
		return d.promise
	}
}