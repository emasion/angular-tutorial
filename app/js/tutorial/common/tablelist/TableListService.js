'use strict'

// @ngInject
module.exports = function TableListService($rootScope, $q, $timeout, $filter, $http) {
	var data = {}
	data.tableList = [
		{
			'name': '[AngularJS] Chapter 1 - 데이터바인딩',
			'url': 'tutorial.chapter01'
		},
		{
			'name': '[AngularJS] Chapter 2 - 정렬과 필터',
			'url': 'tutorial.chapter02'
		}
	]

	this.hasTableList = function() {
		return !_.isEmpty(data)
	}

	this.getTableList = function() {
		return data.tableList
	}
}