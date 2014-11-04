'use strict'

// @ngInject
module.exports = function ChapterController($log, $scope, $q, $routeParams, $timeout, LoadCodeTemplate) {
	$log.info('ChapterController');
	$scope.name  = 'ChapterController'
	$scope.params = $routeParams;

	// template load
	var tempNm = $routeParams['chapter'] + '.html'
	var basePath = './templates/tutorial/chapter/'
	$scope.templateUrl = basePath + tempNm
	$timeout(function () {
		SyntaxHighlighter.all()
	})

	//LoadCodeTemplate.getLoadTemplate(tempNm).then(function(data) {
	//	//console.log(data)
	//	//$scope.template = $q(data);
	//	$scope.template = data;
	//})

}

module.exports.resolve = /*@ngInject*/ {
	LoadCodeTemplate: function ($q, $timeout, LoadCodeTemplateService) {
		var d = $q.defer();
		$timeout(function () {
			d.resolve(LoadCodeTemplateService)
		})
		return d.promise
	}
}